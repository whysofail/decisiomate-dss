/*
  Warnings:

  - You are about to drop the `AlternativeCriteriaScores` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AlternativeCriteriaScores" DROP CONSTRAINT "AlternativeCriteriaScores_alternativeId_fkey";

-- DropForeignKey
ALTER TABLE "AlternativeCriteriaScores" DROP CONSTRAINT "AlternativeCriteriaScores_crtieriaId_fkey";

-- DropTable
DROP TABLE "AlternativeCriteriaScores";

-- CreateTable
CREATE TABLE "AlternativeCriteriaScore" (
    "id" SERIAL NOT NULL,
    "alternativeId" INTEGER NOT NULL,
    "crtieriaId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "AlternativeCriteriaScore_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AlternativeCriteriaScore" ADD CONSTRAINT "AlternativeCriteriaScore_alternativeId_fkey" FOREIGN KEY ("alternativeId") REFERENCES "Alternative"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlternativeCriteriaScore" ADD CONSTRAINT "AlternativeCriteriaScore_crtieriaId_fkey" FOREIGN KEY ("crtieriaId") REFERENCES "Criteria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
