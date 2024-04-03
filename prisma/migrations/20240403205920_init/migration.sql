/*
  Warnings:

  - You are about to drop the column `stret` on the `address` table. All the data in the column will be lost.
  - Added the required column `street` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `address` DROP COLUMN `stret`,
    ADD COLUMN `street` VARCHAR(245) NOT NULL;
