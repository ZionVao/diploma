import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { DepartmentModel } from 'src/common/model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DepartmentModel])],
  providers: [DepartmentService],
  controllers: [DepartmentController],
  exports: [DepartmentService],
})
export class DepartmentModule {}
