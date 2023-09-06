import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-roles.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from './roles.model';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @ApiOperation({summary: 'Create a new role'})
  @ApiResponse({status: 200, type: Role})
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.rolesService.createRole(dto);
  }

  @ApiOperation({summary: 'Get role by value'})
  @ApiResponse({status: 200, type: Role})
  @Get('/:value')
  getRoleByValue(@Param('value') value: string) {
    return this.rolesService.getRoleByValue(value);
  }

  @ApiOperation({summary: 'Get all roles'})
  @ApiResponse({status: 200, type: Role})
  @Get()
  getAll(@Param('value') value: string) {
    return this.rolesService.getAll();
  }
}
