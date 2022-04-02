import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CriarMembroDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(5)
  nome: string;
}
