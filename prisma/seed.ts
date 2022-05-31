import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function seedTicket() {
  const tickets = new Array(100).fill(null).map((item, i) => ({
    id: i,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    position: faker.word.noun(),
    office: faker.word.noun(),
    age: +faker.random.numeric(2),
    startDate: faker.date.past().toISOString(),
    salary: +faker.random.numeric(9),
  }));
  for (const { id, ...ticket } of tickets) {
    await prisma.ticket.upsert({
      where: { id },
      create: { ...ticket },
      update: { ...ticket },
    });
  }
}

async function main() {
  return Promise.all([seedTicket()]);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
