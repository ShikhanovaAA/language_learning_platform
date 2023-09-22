import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-roles.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from './role.model';

@ApiTags('Roles')
@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @ApiOperation({summary: 'Create a new role'})
  @ApiResponse({status: 200, type: Role})
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @ApiOperation({summary: 'Get role by value'})
  @ApiResponse({status: 200, type: Role})
  @Get('/:value')
  getRoleByValue(@Param('value') value: string) {
    return this.roleService.getRoleByValue(value);
  }

  @ApiOperation({summary: 'Get all roles'})
  @ApiResponse({status: 200, type: [Role]})
  @Get()
  getAll() {
    return this.roleService.getAll();
  }
}
