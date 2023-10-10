import { User, UserRole, isAdmin, isManager } from '@llp/models';

export interface UserDto {
  id: number;
  email: string;
  username: string;
  password: string;
  roles: UserRole[];
}

export const userDtoToUser = (user: UserDto): User => ({
  id: user.id,
  email: user.email,
  username: user.username,
  password: user.password,
  roles: user.roles,
  isAdmin: user.roles.some(role => isAdmin(role)),
  isManager: user.roles.some(role => isManager(role)),
});
