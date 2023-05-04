import { Injectable } from '@nestjs/common';
import { Role } from 'src/common/enums/role.enum';
import { User } from 'src/common/interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
      roles: [Role.User],
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
      roles: [Role.Admin],
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
