/*
  Warnings:

  - The primary key for the `AlternativeCriteriaScore` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "AlternativeCriteriaScore" DROP CONSTRAINT "AlternativeCriteriaScore_alternativeId_fkey";

-- DropForeignKey
ALTER TABLE "AlternativeCriteriaScore" DROP CONSTRAINT "AlternativeCriteriaScore_crtieriaId_fkey";

-- AlterTable
ALTER TABLE "AlternativeCriteriaScore" DROP CONSTRAINT "AlternativeCriteriaScore_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "alternativeId" DROP NOT NULL,
ALTER COLUMN "crtieriaId" DROP NOT NULL,
ALTER COLUMN "score" DROP NOT NULL,
ALTER COLUMN "score" SET DEFAULT 0,
ADD CONSTRAINT "AlternativeCriteriaScore_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "AlternativeCriteriaScore" ADD CONSTRAINT "AlternativeCriteriaScore_alternativeId_fkey" FOREIGN KEY ("alternativeId") REFERENCES "Alternative"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlternativeCriteriaScore" ADD CONSTRAINT "AlternativeCriteriaScore_crtieriaId_fkey" FOREIGN KEY ("crtieriaId") REFERENCES "Criteria"("id") ON DELETE SET NULL ON UPDATE CASCADE;
