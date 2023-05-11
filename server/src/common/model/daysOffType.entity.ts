import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'roles' })
export class DaysOffTypeModel extends BaseEntity {
  @Column({
    name: 'title',
    type: 'varchar',
    length: 100,
    nullable: false,
    unique: true,
  })
  title: string;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string | null;
}
