import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { CriarTarefaDto } from './dto/criar-tarefa.dto';
import { Membro } from './entities/membro.entity';
import { Tarefa } from './entities/tarefa.entity';

@Injectable()
export class TarefaService {
  async cadastrarTarefa(criarTarefaDto: CriarTarefaDto) {
    const membro = await getConnection()
      .createQueryBuilder()
      .select('m')
      .from(Membro, 'm')
      .where('m.id=:membroId', { membroId: criarTarefaDto })
      .getOne();

    let tarefa: Tarefa;
    if (membro) {
      tarefa.membro = membro;
      tarefa.nome = criarTarefaDto.nome;
      tarefa.descricao = criarTarefaDto.descricao;
      tarefa.finalizada = criarTarefaDto.finalizada;
      tarefa.prioridade = criarTarefaDto.prioridade;

      if (criarTarefaDto.finalizada) {
        tarefa.dataTermino = new Date();
      }

      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Tarefa)
        .values(tarefa)
        .execute();
    }

    return tarefa;
  }
}
