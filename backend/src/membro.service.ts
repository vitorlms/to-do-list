import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { CriarMembroDto } from './dto/criar-membro.dto';
import { Membro } from './entities/membro.entity';

@Injectable()
export class MembroService {
  async cadastrarTarefa(criarMembroDto: CriarMembroDto) {
    const membro = new Membro();
    membro.email = criarMembroDto.email;
    membro.nome = criarMembroDto.nome;

    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Membro)
      .values(membro)
      .execute();
  }
}
