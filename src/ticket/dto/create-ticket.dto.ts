import { Ticket } from '../entities/ticket.entity';

export type CreateTicketDto = Omit<Ticket, 'id'>;
