/*
  Warnings:

  - You are about to drop the column `weight` on the `Criteria` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "CriteriaType" AS ENUM ('Cost', 'Benefit');

-- AlterTable
ALTER TABLE "Criteria" DROP COLUMN "weight",
ADD COLUMN     "type" "CriteriaType" NOT NULL DEFAULT 'Cost';
