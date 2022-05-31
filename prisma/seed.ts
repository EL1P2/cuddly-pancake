import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function seedTicket() {
  return new Promise<void>(async (resolve, reject) => {
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
      try {
        await prisma.ticket.upsert({
          where: { id },
          create: { ...ticket },
          update: { ...ticket },
        });
      } catch (e) {
        reject(e);
      }
    }
    resolve();
  });
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
