import { UnauthorizedException } from '@nestjs/common';

export const validateAuthToken = (authHeader: string): void => {
  if (!authHeader) {
    throw new UnauthorizedException({message: 'User not authorized'});
  }

  const [bearer, token] = authHeader.split(' ');

  if (bearer !== 'Bearer' || !token) {
    throw new UnauthorizedException({message: 'User not authorized'});
  }
}
