-- DropForeignKey
ALTER TABLE `genero` DROP FOREIGN KEY `genero_filme_id_fkey`;

-- DropForeignKey
ALTER TABLE `participante` DROP FOREIGN KEY `participante_filme_id_fkey`;

-- AlterTable
ALTER TABLE `participante` MODIFY `data_nascimento` DATETIME(3);

-- AddForeignKey
ALTER TABLE `Participante` ADD CONSTRAINT `Participante_filme_id_fkey` FOREIGN KEY (`filme_id`) REFERENCES `Filme`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Genero` ADD CONSTRAINT `Genero_filme_id_fkey` FOREIGN KEY (`filme_id`) REFERENCES `Filme`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
