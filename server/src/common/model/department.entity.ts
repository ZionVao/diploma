import { Entity, Column, ManyToOne, JoinTable } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'departments' })
export class DepartmentModel extends BaseEntity {
  @Column({
    name: 'title',
    type: 'varchar',
    // length: 30,
    // nullable: false,
    // unique: true,
  })
  title: string;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string | null;

  @Column({ name: 'root_department_id', type: 'uuid', nullable: true })
  rootDepartmentId: string | null;

  // @ManyToOne(() => DepartmentModel, {
  //   nullable: true,
  // })
  // @JoinTable({
  //   joinColumn: { name: 'root_department_id', referencedColumnName: 'id' },
  // })
  // rootDepartment: DepartmentModel | null;
}
