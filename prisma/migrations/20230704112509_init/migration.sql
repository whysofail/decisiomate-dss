/*
  Warnings:

  - Added the required column `crtieriaId` to the `AlternativeCriteriaScore` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AlternativeCriteriaScore" ADD COLUMN     "crtieriaId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "AlternativeCriteriaScore" ADD CONSTRAINT "AlternativeCriteriaScore_crtieriaId_fkey" FOREIGN KEY ("crtieriaId") REFERENCES "Criteria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
