import { Entity, PrimaryColumn } from 'typeorm';
import { BaseEntityWithoutId } from './base.entity';

@Entity({ name: 'employee_positions' })
export class EmployeePositionModel extends BaseEntityWithoutId {
  @PrimaryColumn({ name: 'job_position_id', type: 'uuid' })
  jobPositionId: string;

  @PrimaryColumn({ name: 'employee_id', type: 'uuid' })
  employeeId: string;
}
