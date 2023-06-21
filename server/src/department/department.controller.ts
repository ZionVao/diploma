import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Public } from 'src/common/decorators/public.decorator';
import { DepartmentService } from './department.service';
import { Department } from 'src/common/interfaces/department.interface';
import { CreateDepartmentDTO } from 'src/common/dtos/createDepartment.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('department')
@Controller('department')
@Public()
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Get()
  async getAllDepartments(): Promise<Department[]> {
    return this.departmentService.getAllDepartments();
  }

  @Get(':id')
  async getDepartmentById(@Param('id') id: string): Promise<Department> {
    return this.departmentService.getDepartmentById(id);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  async createDepartment(
    @Body() department: CreateDepartmentDTO,
  ): Promise<Department> {
    return this.departmentService.createDepartment({ ...department });
  }

  @Put(':id')
  async updateDepartment(
    @Param('id') id: string,
    @Body() department: Department,
  ): Promise<Department> {
    return this.departmentService.updateDepartment(id, department);
  }

  @Delete(':id')
  async deleteDepartment(@Param('id') id: string): Promise<Department> {
    return this.departmentService.deleteDepartment(id);
  }
}
