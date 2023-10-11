import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from '../user/user.model';
import { LoginUserDto } from '../user/dto/login-user.dto';
import { TokenInfo } from '@llp/models';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
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
      roles: user.roles,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(userDto: LoginUserDto): Promise<User> {
    const user = await this.userService.getUserByEmail(userDto.email);
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    const isPasswordCorrect = await bcrypt.compare(userDto.password, user.password);
    if (user && isPasswordCorrect) return user;

    throw new UnauthorizedException({message: 'Incorrect email or password'});
  }
}
