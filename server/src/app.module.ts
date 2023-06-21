import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './common/config/config.service';
import { DataSource } from 'typeorm';
import { DepartmentModule } from './department/department.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    // TypeOrmModule.forFeature([EmployeeModel], 'Connection'),

    EmployeeModule,
    AuthModule,
    UsersModule,
    DepartmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
