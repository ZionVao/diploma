import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModel } from 'src/common/model/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeModel])],
  providers: [EmployeeService],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
