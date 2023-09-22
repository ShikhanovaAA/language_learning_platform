import { UserRole } from './user-role';

export enum Role {
  Admin = 'ADMIN',
  User = 'USER',
  Guest = 'GUEST',
  Manager = 'MANAGER',
}

export const isAdmin = (userRole: UserRole) => userRole.value === Role.Admin;

export const isManager = (userRole: UserRole) => userRole.value === Role.Manager || userRole.value === Role.Admin;
