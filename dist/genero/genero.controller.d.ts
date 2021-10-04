import { CreateGeneroDto } from './dto/create-genero.dto';
import { GenerosService } from './genero.service';
import { Genero } from '.prisma/client';
export declare class GenerosController {
    private generosService;
    constructor(generosService: GenerosService);
    create(createGenero: CreateGeneroDto): Promise<Genero>;
    findMany(): Promise<Genero[]>;
    findUnique(id: number): Promise<Genero>;
    update(updateGenero: CreateGeneroDto, id: number): Promise<Genero>;
    delete(id: string): Promise<Genero>;
    deleteMany(): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
