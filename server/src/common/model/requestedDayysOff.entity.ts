import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'requested_days_off' })
export class RequestedDaysOffModel extends BaseEntity {
  @Column({ name: 'employee_id', type: 'uuid', nullable: false })
  employeeId: string;

  @Column({ name: 'assigned_by_id', type: 'uuid', nullable: false })
  assignedById: string;

  @Column({ name: 'type_id', type: 'uuid', nullable: false })
  typeId: string;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string | null;

  @Column({
    name: 'start_time',
    type: 'timestamp',
    nullable: false,
    default: 'CURRENT_TIMESTAMP',
  })
  startTime: Date;

  @Column({
    name: 'end_time',
    type: 'timestamp',
    nullable: true,
  })
  endTime: Date | null;

  @Column({ name: 'is_active', type: 'boolean', default: 'true' })
  isActive: boolean;
}
