import { Participante, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ParticipantesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.ParticipanteCreateInput): Promise<Participante>;
    findAll(): Promise<Participante[]>;
    findOne(participanteId: number): Promise<Participante>;
    update(participanteId: number, data: Prisma.ParticipanteCreateInput): Promise<Participante>;
    deleteOne(where: Prisma.ParticipanteWhereUniqueInput): Promise<Participante>;
    deleteAll(): Promise<Prisma.BatchPayload>;
}
