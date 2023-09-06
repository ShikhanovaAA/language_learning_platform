import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './roles.model';
import { CreateRoleDto } from './dto/create-roles.dto';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

  async createRole(roleDto: CreateRoleDto): Promise<Role> {
    const role = await this.roleRepository.create(roleDto);

    return role;
  }

  async getRoleByValue(value: string): Promise<Role> {
    const role = await this.roleRepository.findOne({ where: { value }});

    return role;
  }

  async getAll(): Promise<Role[]> {
    const roles = await this.roleRepository.findAll();

    return roles;
  }
}
