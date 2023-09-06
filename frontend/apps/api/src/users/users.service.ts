import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from '../roles/roles.service';
import { AssignRoleToUserDto } from './dto/assign-role-to-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private rolesService: RolesService
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.create(dto);

    return user;
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.userRepository.findAll({
      include:{ all: true }
    });

    return users;
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { email },
      include: { all: true }
    });

    return user;
  }

  async addRole(dto: AssignRoleToUserDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    const role = await this.rolesService.getRoleByValue(dto.value);

    if (role && user) {
        await user.$add('role', role.id);
        return dto;
    }

    throw new HttpException('User or role not found', HttpStatus.NOT_FOUND);
  }
}
