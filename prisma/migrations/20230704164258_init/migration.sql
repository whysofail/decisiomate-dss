/*
  Warnings:

  - Made the column `score` on table `AlternativeCriteriaScore` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "AlternativeCriteriaScore" ALTER COLUMN "score" SET NOT NULL;
