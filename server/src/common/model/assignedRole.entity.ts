import { Entity, PrimaryColumn } from 'typeorm';
import { BaseEntityWithoutId } from './base.entity';

@Entity({ name: 'assigned_roles' })
export class AssignedRoleModel extends BaseEntityWithoutId {
  @PrimaryColumn({ name: 'role_id', type: 'uuid' })
  roleId: string;

  @PrimaryColumn({ name: 'employee_id', type: 'uuid' })
  employeeId: string;
}
