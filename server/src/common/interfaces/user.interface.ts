import { Role } from '../enums/role.enum';

export interface User {
  userId: string;
  email: string;
  username: string;
  roles: Role[];
}
