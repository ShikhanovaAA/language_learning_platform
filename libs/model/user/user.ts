import { UserRole } from './user-role';

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  roles: UserRole[];
  isAdmin: boolean;
  isManager: boolean;
}
