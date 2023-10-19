import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { RoleService } from '../role/role.service';
import { AssignRoleToUserDto } from './dto/assign-role-to-user.dto';
import { JwtService } from '@nestjs/jwt';
import { DeocodedToken } from './interfaces/deocoded-token.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RoleService,
    private jwtService: JwtService,
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.create(dto);

    return user;
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.userRepository.findAll({
      include:{ all: true },
      attributes: { exclude: ['password'] },
    });

    return users;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const user = await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });

    return user;
  }

  async getUserByToken(request: any): Promise<User> {
    const authHeader = request.headers.authorization;
    if (!authHeader) throw new HttpException('The user must be logged in', HttpStatus.UNAUTHORIZED);

    const token = authHeader.split(' ')[1];
    if (!this.jwtService.verify(token)) throw new HttpException('The user must be logged in', HttpStatus.UNAUTHORIZED);
    const deocoded = this.jwtService.decode(token) as DeocodedToken;

    const user = await this.userRepository.findByPk(deocoded.id,
      {
        include: { all: true },
        attributes: { exclude: ['password'] },
      },
    );

    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return user;
  }

  async assignRoleToUser(dto: AssignRoleToUserDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    const role = await this.roleService.getRoleByValue(dto.value);

    if (role && user) {
        await user.$add('role', role.id);
        return dto;
    }

    throw new HttpException('User or role not found', HttpStatus.NOT_FOUND);
  }
}
