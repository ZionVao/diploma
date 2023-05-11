import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'assigned_days_off' })
export class AssignedDaysOffModel extends BaseEntity {
  @Column({ name: 'employee_id', type: 'uuid', nullable: false })
  employeeId: string;

  @Column({ name: 'assigned_by_id', type: 'uuid', nullable: false })
  assignedById: string;

  @Column({ name: 'type_id', type: 'uuid', nullable: false })
  typeId: string;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string | null;

  @Column({
    name: 'available_from',
    type: 'timestamp',
    nullable: false,
    default: 'CURRENT_TIMESTAMP',
  })
  availableFrom: Date;

  @Column({
    name: 'available_to',
    type: 'timestamp',
    nullable: true,
  })
  availableTo: Date | null;
}
