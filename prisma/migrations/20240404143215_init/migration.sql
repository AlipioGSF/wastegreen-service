/*
  Warnings:

  - You are about to drop the column `date_create` on the `profile` table. All the data in the column will be lost.
  - Added the required column `create_at` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `profile` DROP COLUMN `date_create`,
    ADD COLUMN `create_at` DATE NOT NULL,
    ADD COLUMN `update_at` DATE NOT NULL;
