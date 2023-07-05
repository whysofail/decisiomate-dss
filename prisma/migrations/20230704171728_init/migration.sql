/*
  Warnings:

  - You are about to drop the column `crtieriaId` on the `AlternativeCriteriaScore` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "AlternativeCriteriaScore" DROP CONSTRAINT "AlternativeCriteriaScore_crtieriaId_fkey";

-- AlterTable
ALTER TABLE "AlternativeCriteriaScore" DROP COLUMN "crtieriaId",
ADD COLUMN     "criteriaId" INTEGER;

-- AddForeignKey
ALTER TABLE "AlternativeCriteriaScore" ADD CONSTRAINT "AlternativeCriteriaScore_criteriaId_fkey" FOREIGN KEY ("criteriaId") REFERENCES "Criteria"("id") ON DELETE SET NULL ON UPDATE CASCADE;
