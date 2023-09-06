import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';
import { AssignRoleToUserDto } from './dto/assign-role-to-user.dto';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../guards/roles-auth.decorator';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({summary: 'Get all users'})
  @ApiResponse({status: 200, type: [User]})
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({summary: 'Assign a role to a user'})
  @ApiResponse({status: 200})
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get('/role')
  addRole(@Body() dto: AssignRoleToUserDto) {
    return this.usersService.addRole(dto);
  }
}
