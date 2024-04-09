/*
  Warnings:

  - You are about to drop the column `address` on the `address` table. All the data in the column will be lost.
  - Added the required column `state` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `address` DROP COLUMN `address`,
    ADD COLUMN `state` VARCHAR(245) NOT NULL;
