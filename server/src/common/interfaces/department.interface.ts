import { BaseInterface } from './base.interface';

export interface Department extends BaseInterface {
  title: string;
  description?: string;
  rootDepartmentId?: string;
}
