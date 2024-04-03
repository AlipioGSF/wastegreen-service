-- DropIndex
DROP INDEX `User_email_key` ON `user`;

-- CreateTable
CREATE TABLE `Address` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stret` VARCHAR(245) NOT NULL,
    `city` VARCHAR(245) NOT NULL,
    `address` VARCHAR(245) NOT NULL,
    `zipcode` INTEGER NOT NULL,
    `profileId` INTEGER NOT NULL,

    UNIQUE INDEX `Address_profileId_key`(`profileId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Plan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(245) NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rewards` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(245) NOT NULL,
    `date` DATE NOT NULL,
    `profileId` INTEGER NOT NULL,

    UNIQUE INDEX `Rewards_profileId_key`(`profileId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Collect` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATE NOT NULL,
    `profileId` INTEGER NOT NULL,
    `addressId` INTEGER NOT NULL,

    UNIQUE INDEX `Collect_profileId_key`(`profileId`),
    UNIQUE INDEX `Collect_addressId_key`(`addressId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(245) NOT NULL,
    `cpf` VARCHAR(245) NOT NULL,
    `date_create` DATE NOT NULL,
    `userId` INTEGER NOT NULL,
    `planId` INTEGER NOT NULL,

    UNIQUE INDEX `Profile_userId_key`(`userId`),
    UNIQUE INDEX `Profile_planId_key`(`planId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Address` ADD CONSTRAINT `Address_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `Profile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rewards` ADD CONSTRAINT `Rewards_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `Profile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Collect` ADD CONSTRAINT `Collect_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `Profile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Collect` ADD CONSTRAINT `Collect_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `Address`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Profile` ADD CONSTRAINT `Profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Profile` ADD CONSTRAINT `Profile_planId_fkey` FOREIGN KEY (`planId`) REFERENCES `Plan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
