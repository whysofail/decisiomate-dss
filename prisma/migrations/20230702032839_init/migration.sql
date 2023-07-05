-- CreateTable
CREATE TABLE "Alternative" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Alternative_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Criteria" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,

    CONSTRAINT "Criteria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlternativeCriteriaScore" (
    "id" SERIAL NOT NULL,
    "alternativeId" INTEGER NOT NULL,

    CONSTRAINT "AlternativeCriteriaScore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AlternativeCriteriaScore_alternativeId_key" ON "AlternativeCriteriaScore"("alternativeId");

-- AddForeignKey
ALTER TABLE "AlternativeCriteriaScore" ADD CONSTRAINT "AlternativeCriteriaScore_alternativeId_fkey" FOREIGN KEY ("alternativeId") REFERENCES "Alternative"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
