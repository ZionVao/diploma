import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'roles' })
export class RoleModel extends BaseEntity {
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
}
