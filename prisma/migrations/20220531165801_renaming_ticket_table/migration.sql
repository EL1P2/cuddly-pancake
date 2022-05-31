/*
  Warnings:

  - You are about to drop the `Ticket` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Ticket";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Employee" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "office" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "startDate" DATETIME NOT NULL,
    "salary" INTEGER NOT NULL
);
