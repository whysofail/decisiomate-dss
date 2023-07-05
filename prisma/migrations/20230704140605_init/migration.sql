/*
  Warnings:

  - A unique constraint covering the columns `[crtieriaId]` on the table `AlternativeCriteriaScore` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "AlternativeCriteriaScore_crtieriaId_key" ON "AlternativeCriteriaScore"("crtieriaId");
