/*
  Warnings:

  - You are about to drop the column `repos` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "repos";

-- CreateTable
CREATE TABLE "Repo" (
    "repoUrl" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("repoUrl")
);

-- CreateTable
CREATE TABLE "_RepoToUser" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_RepoToUser_AB_unique" ON "_RepoToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_RepoToUser_B_index" ON "_RepoToUser"("B");

-- AddForeignKey
ALTER TABLE "_RepoToUser" ADD FOREIGN KEY ("A") REFERENCES "Repo"("repoUrl") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RepoToUser" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
