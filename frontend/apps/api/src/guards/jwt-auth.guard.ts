import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { validateAuthToken } from '../utils/auth';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    try {
      const authHeader = request.headers.authorization;
      validateAuthToken(authHeader);

      const token = authHeader.split(' ')[1];
      const user = this.jwtService.verify(token);
      request.user = user;

      return true;
    } catch (e) {
      throw new UnauthorizedException({message: 'User not authorized'});
    }
  }
}
