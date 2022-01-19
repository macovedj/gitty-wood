/*
  Warnings:

  - You are about to drop the `Repo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_RepoToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_RepoToUser" DROP CONSTRAINT "_RepoToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_RepoToUser" DROP CONSTRAINT "_RepoToUser_B_fkey";

-- DropTable
DROP TABLE "Repo";

-- DropTable
DROP TABLE "_RepoToUser";

-- CreateTable
CREATE TABLE "Repository" (
    "repoUrl" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("repoUrl")
);

-- CreateTable
CREATE TABLE "_RepositoryToUser" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_RepositoryToUser_AB_unique" ON "_RepositoryToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_RepositoryToUser_B_index" ON "_RepositoryToUser"("B");

-- AddForeignKey
ALTER TABLE "_RepositoryToUser" ADD FOREIGN KEY ("A") REFERENCES "Repository"("repoUrl") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RepositoryToUser" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
