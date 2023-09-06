import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { TokenInfoDto } from './dto/token.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({summary: 'Log in to the app and get a token'})
  @ApiResponse({status: 200, type: TokenInfoDto})
  @Post('/login')
  login(@Body() userDto: LoginUserDto) {
      return this.authService.login(userDto)
  }

  @ApiOperation({summary: 'User registration and getting a token'})
  @ApiResponse({status: 200, type: TokenInfoDto})
  @Post('/registration')
  registration(@Body() userDto: CreateUserDto) {
      return this.authService.registration(userDto)
  }
}
