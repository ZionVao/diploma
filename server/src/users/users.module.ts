import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModel } from 'src/common/model/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeModel])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
