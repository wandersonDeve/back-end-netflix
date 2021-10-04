import { IsNotEmpty, IsOptional } from 'class-Validator';

export class CreateGeneroDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  filmeId: number;
}
