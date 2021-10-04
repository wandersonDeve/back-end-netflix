import { Injectable } from '@nestjs/common';
import { Participante, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ParticipantesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ParticipanteCreateInput): Promise<Participante> {
    return this.prisma.participante.create({ data });
  }

  async findAll(): Promise<Participante[]> {
    return this.prisma.participante.findMany();
  }

  async findOne(participanteId: number): Promise<Participante> {
    return this.prisma.participante.findUnique({
      where: {
        id: participanteId,
      },
      include: {
        filme: true,
      },
    });
  }

  async update(
    participanteId: number,
    data: Prisma.ParticipanteCreateInput,
  ): Promise<Participante> {
    return this.prisma.participante.update({
      data,
      where: {
        id: participanteId,
      },
    });
  }

  async deleteOne(
    where: Prisma.ParticipanteWhereUniqueInput,
  ): Promise<Participante> {
    return this.prisma.participante.delete({ where });
  }

  async deleteAll() {
    return this.prisma.participante.deleteMany();
  }
}
