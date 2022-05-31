-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "office" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "salary" INTEGER NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);
