import { CreateParticipanteDto } from './dto/create-participante.dto';
import { ParticipantesService } from './participante.service';
import { Participante } from '.prisma/client';
export declare class ParticipantesController {
    private participantesService;
    constructor(participantesService: ParticipantesService);
    create(createParticipante: CreateParticipanteDto): Promise<Participante>;
    findMany(): Promise<Participante[]>;
    findUnique(id: number): Promise<Participante>;
    update(updateParticipante: CreateParticipanteDto, id: number): Promise<Participante>;
    delete(id: string): Promise<Participante>;
    deleteMany(): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
