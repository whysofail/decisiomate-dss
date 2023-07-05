/*
  Warnings:

  - Added the required column `score` to the `AlternativeCriteriaScores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AlternativeCriteriaScores" ADD COLUMN     "score" INTEGER NOT NULL;
