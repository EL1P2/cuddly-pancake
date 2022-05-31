import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { PrismaService } from '../core/services/prisma.service';
import { Paginate } from '../core/interfaces/paginate.interface';
import { buildPaginationCriteria } from '../core/helpers/build-pagination-criteria.helper';

@Injectable()
export class TicketService {
  constructor(private prismaService: PrismaService) {}

  create(createTicketDto: CreateTicketDto) {
    return this.prismaService.ticket.create({ data: { ...createTicketDto } });
  }

  findAll(paginate: Partial<Paginate<CreateTicketDto>>) {
    return this.prismaService.ticket.findMany({
      ...buildPaginationCriteria(paginate),
    });
  }

  findOne(id: number) {
    return this.prismaService.ticket.findUnique({ where: { id } });
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return this.prismaService.ticket.update({
      where: { id },
      data: { ...updateTicketDto },
    });
  }

  remove(id: number) {
    return this.prismaService.ticket.delete({
      where: { id },
    });
  }
}
