import { Module } from '@nestjs/common';
import { ParticipantesService } from './participante.service';
import { ParticipantesController } from './participante.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [ParticipantesService],
  controllers: [ParticipantesController],
  imports: [PrismaModule],
})
export class ParticipanteModule {}
