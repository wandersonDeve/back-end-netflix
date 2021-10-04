import { Module } from '@nestjs/common';
import { FilmesService } from './filme.service';
import { FilmesController } from './filme.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [FilmesService],
  controllers: [FilmesController],
  imports: [PrismaModule],
})
export class FilmeModule {}
