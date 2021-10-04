import { IsNotEmpty, IsOptional } from 'class-Validator';

export class CreateFilmeDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  imagem: string;

  @IsNotEmpty()
  data_lancamento: number;

  @IsNotEmpty()
  tempo_duracao: number;
}
