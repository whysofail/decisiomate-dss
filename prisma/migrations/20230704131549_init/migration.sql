/*
  Warnings:

  - The primary key for the `AlternativeCriteriaScore` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `AlternativeCriteriaScore` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AlternativeCriteriaScore" DROP CONSTRAINT "AlternativeCriteriaScore_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "AlternativeCriteriaScore_pkey" PRIMARY KEY ("alternativeId", "crtieriaId");
