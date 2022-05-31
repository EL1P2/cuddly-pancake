import { Employee } from '../entities/employee.entity';

export type CreateEmployeeDto = Omit<Employee, 'id'>;
