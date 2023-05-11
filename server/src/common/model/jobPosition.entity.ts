import { Entity, Column, ManyToOne, JoinTable, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { DepartmentModel } from './department.entity';

@Entity({ name: 'job_positions' })
export class JobPositionModel extends BaseEntity {
  @Column({
    name: 'title',
    type: 'varchar',
    length: 30,
    nullable: false,
    unique: true,
  })
  title: string;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string | null;

  @Column({ name: 'department_id', type: 'uuid', nullable: true })
  departmentId: string | null;

  @ManyToOne(() => DepartmentModel, {
    nullable: true,
  })
  @JoinColumn({ name: 'department_id', referencedColumnName: 'id' })
  department: DepartmentModel | null;
}
