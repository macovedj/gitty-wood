/*
  Warnings:

  - You are about to drop the `_RepositoryToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_RepositoryToUser" DROP CONSTRAINT "_RepositoryToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_RepositoryToUser" DROP CONSTRAINT "_RepositoryToUser_B_fkey";

-- AlterTable
ALTER TABLE "Repository" ADD COLUMN     "owners" TEXT[];

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "repos" TEXT[];

-- DropTable
DROP TABLE "_RepositoryToUser";
