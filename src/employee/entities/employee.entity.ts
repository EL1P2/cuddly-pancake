import { BaseModel } from '../../core/entities/base.entity';

export class Employee extends BaseModel {
  name: string;
  position: string;
  office: string;
  age: number;
  startDate: string;
  salary: number;
}
