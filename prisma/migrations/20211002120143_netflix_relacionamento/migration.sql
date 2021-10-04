/*
  Warnings:

  - You are about to drop the column `filmeId` on the `genero` table. All the data in the column will be lost.
  - You are about to drop the column `filmeId` on the `participante` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `genero` DROP FOREIGN KEY `Genero_filmeId_fkey`;

-- DropForeignKey
ALTER TABLE `participante` DROP FOREIGN KEY `Participante_filmeId_fkey`;

-- AlterTable
ALTER TABLE `genero` DROP COLUMN `filmeId`,
    ADD COLUMN `filme_id` INTEGER;

-- AlterTable
ALTER TABLE `participante` DROP COLUMN `filmeId`,
    ADD COLUMN `filme_id` INTEGER;

-- AddForeignKey
ALTER TABLE `participante` ADD CONSTRAINT `participante_filme_id_fkey` FOREIGN KEY (`filme_id`) REFERENCES `filme`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `genero` ADD CONSTRAINT `genero_filme_id_fkey` FOREIGN KEY (`filme_id`) REFERENCES `filme`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
