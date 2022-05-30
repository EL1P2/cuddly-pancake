import { BaseModel } from '../../shared/entities/base.entity';

export class Ticket extends BaseModel {
  name: string;
  position: string;
  office: string;
  age: number;
  startDate: string;
  salary: number;
}
