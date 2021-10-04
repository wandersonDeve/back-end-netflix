import { Filme, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FilmesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.FilmeCreateInput): Promise<Filme>;
    findAll(): Promise<Filme[]>;
    findOne(filmeId: number): Promise<Filme>;
    update(filmeId: number, data: Prisma.FilmeCreateInput): Promise<Filme>;
    deleteOne(where: Prisma.FilmeWhereUniqueInput): Promise<Filme>;
    deleteAll(): Promise<Prisma.BatchPayload>;
}
