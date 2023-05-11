import { Entity, Column, CreateDateColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'employees' })
export class EmployeeModel extends BaseEntity {
  @Column({ name: 'first_name', type: 'varchar', length: 30, nullable: false })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar', length: 30, nullable: false })
  lastName: string;

  @Column({
    name: 'date_of_birth',
    type: 'date',
    nullable: false,
    default: () => 'CURRENT_DATE',
  })
  dateOfBirth: Date;

  @Column({
    name: 'email',
    type: 'varchar',
    length: 30,
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    name: 'identification_number',
    type: 'varchar',
    length: 20,
    nullable: false,
    unique: true,
  })
  idn: string;

  @Column({
    name: 'address',
    type: 'varchar',
    length: 100,
  })
  address: string | null;

  @Column({
    name: 'phone_number',
    type: 'varchar',
    length: 15,
  })
  phoneNumber: string | null;

  @Column({
    name: 'avatar_url',
    type: 'varchar',
    length: 80,
  })
  avatarUrl: string | null;

  @Column({
    name: 'password',
    type: 'text',
  })
  password: string;
}
