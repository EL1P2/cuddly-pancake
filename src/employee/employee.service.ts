import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from '../core/services/prisma.service';
import { Paginate } from '../core/interfaces/paginate.interface';
import { buildPaginationCriteria } from '../core/helpers/build-pagination-criteria.helper';

@Injectable()
export class EmployeeService {
  constructor(private prismaService: PrismaService) {}

  create(createEmployeeDto: CreateEmployeeDto) {
    return this.prismaService.employee.create({
      data: { ...createEmployeeDto },
    });
  }

  findAll(paginate: Partial<Paginate<CreateEmployeeDto>>) {
    return this.prismaService.employee.findMany({
      ...buildPaginationCriteria(paginate),
    });
  }

  findOne(id: number) {
    return this.prismaService.employee.findUnique({ where: { id } });
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return this.prismaService.employee.update({
      where: { id },
      data: { ...updateEmployeeDto },
    });
  }

  remove(id: number) {
    return this.prismaService.employee.delete({
      where: { id },
    });
  }
}
