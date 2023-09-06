import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from '../users/users.model';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { TokenInfo } from '@llp/model';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService) {}

  async login(userDto: LoginUserDto): Promise<TokenInfo> {
    const user = await this.validateUser(userDto);

    return this.generateToken(user);
  }

  async registration(userDto: CreateUserDto): Promise<TokenInfo> {
    const candidate = await this.userService.getUserByEmail(userDto.email);
    if (candidate) {
      throw new HttpException('User with this email exists!', HttpStatus.BAD_REQUEST);
    }

    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.userService.createUser({...userDto, password: hashPassword});

    return this.generateToken(user);
  }

  private generateToken(user: User): TokenInfo {
    const payload = {
      email: user.email,
      id: user.id,
      roles: user.roles
    };

    return {
      token: this.jwtService.sign(payload)
    }
  }

  private async validateUser(userDto: LoginUserDto): Promise<User> {
    const user = await this.userService.getUserByEmail(userDto.email);
    const isPasswordCorrect = await bcrypt.compare(userDto.password, user.password);

    if (user && isPasswordCorrect) return user;

    throw new UnauthorizedException({message: 'Incorrect email or password'});
  }
}
