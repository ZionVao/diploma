import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/common/enums/role.enum';
import { User } from 'src/common/interfaces/user.interface';
import { EmployeeModel } from 'src/common/model/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(EmployeeModel)
    private usersRepository: Repository<EmployeeModel>,
  ) {}

  async findOne(email: string, password: string): Promise<User | undefined> {
    const user = await this.usersRepository.findOne({
      where: [
        {
          email,
          password,
        },
      ],
    });
    if (user) {
      const { id, firstName, lastName } = user;
      return {
        userId: id,
        username: `${firstName} ${lastName}`,
        email,
        roles: [],
      };
    } else return undefined;
  }
}
