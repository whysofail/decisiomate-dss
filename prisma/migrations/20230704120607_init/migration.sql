/*
  Warnings:

  - You are about to drop the `AlternativeCriteriaScore` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AlternativeCriteriaScore" DROP CONSTRAINT "AlternativeCriteriaScore_alternativeId_fkey";

-- DropForeignKey
ALTER TABLE "AlternativeCriteriaScore" DROP CONSTRAINT "AlternativeCriteriaScore_crtieriaId_fkey";

-- DropTable
DROP TABLE "AlternativeCriteriaScore";

-- CreateTable
CREATE TABLE "AlternativeCriteriaScores" (
    "id" SERIAL NOT NULL,
    "alternativeId" INTEGER NOT NULL,
    "crtieriaId" INTEGER NOT NULL,

    CONSTRAINT "AlternativeCriteriaScores_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AlternativeCriteriaScores" ADD CONSTRAINT "AlternativeCriteriaScores_alternativeId_fkey" FOREIGN KEY ("alternativeId") REFERENCES "Alternative"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlternativeCriteriaScores" ADD CONSTRAINT "AlternativeCriteriaScores_crtieriaId_fkey" FOREIGN KEY ("crtieriaId") REFERENCES "Criteria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
