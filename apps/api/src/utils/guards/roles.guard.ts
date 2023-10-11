import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles-auth.decorator';
import { validateAuthToken } from '../auth';
import { Role } from '../../role/role.model';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);
      if (!requiredRoles) return true;

      const request = context.switchToHttp().getRequest();
      const authHeader = request.headers.authorization;
      validateAuthToken(authHeader);

      const token = authHeader.split(' ')[1];
      const user = this.jwtService.verify(token);
      request.user = user;

      return user.roles.some((role: Role) => requiredRoles.includes(role.value));
    } catch (e) {
      throw new HttpException( 'No access', HttpStatus.FORBIDDEN)
    }
  }
}
