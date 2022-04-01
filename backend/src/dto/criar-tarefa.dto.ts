import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CriarTarefaDto {
  @IsNotEmpty()
  @IsNumber()
  membro: number;

  @IsNotEmpty()
  @IsString()
  @Length(5, 50)
  nome: string;

  @IsOptional()
  @IsString()
  descricao: string;

  @IsNotEmpty()
  @IsBoolean()
  finalizada: boolean;

  @IsNotEmpty()
  @IsString()
  prioridade: string;
}
