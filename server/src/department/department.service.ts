import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDepartmentDTO } from 'src/common/dtos/createDepartment.dto';
import { Department } from 'src/common/interfaces/department.interface';
import { DepartmentModel } from 'src/common/model';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(DepartmentModel)
    private departmentRepository: Repository<DepartmentModel>,
  ) {}

  async getAllDepartments(): Promise<Department[]> {
    const departments = await this.departmentRepository.find();
    return departments.map((item) => ({ id: item.id, title: item.title }));
  }

  async getDepartmentById(id: string): Promise<Department | null> {
    const department = await this.departmentRepository.findOneBy({ id });
    return department ? { id: department.id, title: department.title } : null;
  }

  async createDepartment(
    department: CreateDepartmentDTO,
  ): Promise<Department | null> {
    const newDepartment = this.departmentRepository.create(department);

    const sevedDepartment = await this.departmentRepository.save(newDepartment);
    return sevedDepartment
      ? { id: sevedDepartment.id, title: sevedDepartment.title }
      : null;
  }

  async updateDepartment(
    id: string,
    department: Department,
  ): Promise<Department | null> {
    await this.departmentRepository.update(id, department);
    const updatedDepartment = await this.departmentRepository.findOneBy({ id });
    return department
      ? { id: updatedDepartment.id, title: updatedDepartment.title }
      : null;
  }

  async deleteDepartment(id: string): Promise<Department | null> {
    const department = await this.departmentRepository.findOneBy({ id });
    await this.departmentRepository.delete(id);

    return department ? { id: department.id, title: department.title } : null;
  }
}
