-- CreateTable
CREATE TABLE `Alternative` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Criteria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `type` ENUM('Cost', 'Benefit') NOT NULL DEFAULT 'Cost',
    `weight` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AlternativeCriteriaScore` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `alternativeId` INTEGER NULL,
    `criteriaId` INTEGER NULL,
    `score` DECIMAL(65, 30) NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AlternativeCriteriaScore` ADD CONSTRAINT `AlternativeCriteriaScore_alternativeId_fkey` FOREIGN KEY (`alternativeId`) REFERENCES `Alternative`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AlternativeCriteriaScore` ADD CONSTRAINT `AlternativeCriteriaScore_criteriaId_fkey` FOREIGN KEY (`criteriaId`) REFERENCES `Criteria`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
