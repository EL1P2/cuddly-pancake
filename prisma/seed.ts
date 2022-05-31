import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function seedEmployee() {
  return new Promise<void>(async (resolve, reject) => {
    const employees = new Array(100).fill(null).map((item, i) => ({
      id: i,
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      position: faker.word.noun(),
      office: faker.word.noun(),
      age: +faker.random.numeric(2),
      startDate: faker.date.past().toISOString(),
      salary: +faker.random.numeric(9),
    }));
    for (const { id, ...employee } of employees) {
      try {
        await prisma.employee.upsert({
          where: { id },
          create: { ...employee },
          update: { ...employee },
        });
      } catch (e) {
        reject(e);
      }
    }
    resolve();
  });
}

async function main() {
  return Promise.all([seedEmployee()]);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
