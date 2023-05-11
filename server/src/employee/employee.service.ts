import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/common/interfaces/user.interface';
import { EmployeeModel } from 'src/common/model/employee.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeModel)
    private usersRepository: Repository<EmployeeModel>, // @InjectDataSource('albumsConnection') // private dataSource: DataSource
  ) {}

  findAll(): Promise<EmployeeModel[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<EmployeeModel | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  // async createMany(users: User[]) {
  //   const queryRunner = this.dataSource.createQueryRunner();
  // }
}
