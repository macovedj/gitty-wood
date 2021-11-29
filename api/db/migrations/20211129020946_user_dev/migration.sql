-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "repos" TEXT[],

    PRIMARY KEY ("id")
);
