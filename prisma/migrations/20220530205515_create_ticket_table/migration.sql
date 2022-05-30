-- CreateTable
CREATE TABLE "Ticket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "office" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "startDate" DATETIME NOT NULL,
    "salary" INTEGER NOT NULL
);
