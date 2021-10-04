/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Genero, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GenerosService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.GeneroCreateInput): Promise<Genero> {
    return this.prisma.genero.create({ data });
  }

  async findAll(): Promise<Genero[]> {
    return this.prisma.genero.findMany();
  }

  async findOne(generoId: number): Promise<Genero> {
    return this.prisma.genero.findUnique({
      where: {
        id: generoId,
      },
      include: {
        filme: true,
      },
    });
  }

  async update(
    generoId: number,
    data: Prisma.GeneroCreateInput,
  ): Promise<Genero> {
    return this.prisma.genero.update({
      data,
      where: {
        id: generoId,
      },
    });
  }

  async deleteOne(where: Prisma.GeneroWhereUniqueInput): Promise<Genero> {
    return this.prisma.genero.delete({ where });
  }

  async deleteAll() {
    return this.prisma.genero.deleteMany();
  }
}
