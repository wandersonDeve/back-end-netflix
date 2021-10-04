import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateParticipanteDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  imagem: string;

  @IsOptional()
  data_nascimento: Date;

  @IsNotEmpty()
  staff: boolean;

  @IsNotEmpty()
  ator: boolean;

  @IsOptional()
  filmeId: number;
}
