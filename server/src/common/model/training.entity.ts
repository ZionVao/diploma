import { Column, Entity, JoinTable, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { EmployeeModel } from './employee.entity';

@Entity({ name: 'training' })
export class TrainingModel extends BaseEntity {
  @Column({
    name: 'training_name',
    type: 'varchar',
    length: 200,
    nullable: false,
  })
  trainingName: string;

  @Column({ name: 'employee_id', type: 'uuid', nullable: false })
  employeeId: string;

  @ManyToOne(() => EmployeeModel, {
    nullable: false,
  })
  @JoinTable({
    joinColumn: { name: 'employee_id', referencedColumnName: 'id' },
  })
  employee: EmployeeModel;

  @Column({
    name: 'start_date',
    type: 'date',
    nullable: false,
    default: 'CURRENT_DATE',
  })
  startDate: Date;

  @Column({
    name: 'completion_date',
    type: 'date',
  })
  completionDate: Date;
}
