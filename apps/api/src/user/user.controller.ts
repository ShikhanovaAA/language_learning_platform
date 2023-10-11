import { Body, Controller, Get, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.model';
import { AssignRoleToUserDto } from './dto/assign-role-to-user.dto';
import { RolesGuard } from '../utils/guards/roles.guard';
import { Roles } from '../utils/guards/roles-auth.decorator';
import { JwtAuthGuard } from '../utils/guards/jwt-auth.guard';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({summary: 'Get all users'})
  @ApiResponse({status: 200, type: [User]})
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @ApiOperation({summary: 'Get user by Bearer token'})
  @ApiResponse({status: 200, type: User})
  @UseGuards(JwtAuthGuard)
  @Get('/user-by-token')
  getUserByToken(@Request() request: any) {
    return this.userService.getUserByToken(request);
  }

  @ApiOperation({summary: 'Assign a role to a user'})
  @ApiResponse({status: 200})
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get('/role')
  assignRoleToUser(@Body() dto: AssignRoleToUserDto) {
    return this.userService.assignRoleToUser(dto);
  }
}
