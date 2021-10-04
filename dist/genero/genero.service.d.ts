import { Genero, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class GenerosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.GeneroCreateInput): Promise<Genero>;
    findAll(): Promise<Genero[]>;
    findOne(generoId: number): Promise<Genero>;
    update(generoId: number, data: Prisma.GeneroCreateInput): Promise<Genero>;
    deleteOne(where: Prisma.GeneroWhereUniqueInput): Promise<Genero>;
    deleteAll(): Promise<Prisma.BatchPayload>;
}
