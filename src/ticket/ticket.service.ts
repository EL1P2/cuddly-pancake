import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { PrismaService } from '../core/services/prisma.service';

@Injectable()
export class TicketService {
  constructor(private prismaService: PrismaService) {}

  create(createTicketDto: CreateTicketDto) {
    return this.prismaService.ticket.create({ data: { ...createTicketDto } });
  }

  findAll() {
    return this.prismaService.ticket.findMany({});
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
