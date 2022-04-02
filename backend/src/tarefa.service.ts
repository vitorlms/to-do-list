import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { CriarTarefaDto } from './dto/criar-tarefa.dto';
import { EditarTarefaDto } from './dto/editar-tarefa.dto';
import { Membro } from './entities/membro.entity';
import { Tarefa } from './entities/tarefa.entity';

@Injectable()
export class TarefaService {
  async cadastrarTarefa(criarTarefaDto: CriarTarefaDto) {
    const membro = await getConnection()
      .createQueryBuilder()
      .select('m')
      .from(Membro, 'm')
      .where('m.id=:membroId', { membroId: criarTarefaDto.membro })
      .getOne();

    const tarefa = new Tarefa();
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

  async editarTarefa(editarTarefaDto: EditarTarefaDto) {
    const membro = await getConnection()
      .createQueryBuilder()
      .select('m')
      .from(Membro, 'm')
      .where('m.id=:membroId', { membroId: editarTarefaDto.membro })
      .getOne();

    const tarefa = new Tarefa();
    if (membro) {
      tarefa.membro = membro;
      tarefa.nome = editarTarefaDto.nome;
      tarefa.descricao = editarTarefaDto.descricao;
      tarefa.finalizada = editarTarefaDto.finalizada;
      tarefa.prioridade = editarTarefaDto.prioridade;

      if (editarTarefaDto.finalizada) {
        tarefa.dataTermino = new Date();
      }

      await getConnection()
        .createQueryBuilder()
        .update(Tarefa)
        .set(tarefa)
        .where('id=:tarefaId', { tarefaId: editarTarefaDto.id })
        .execute();
    }

    return tarefa;
  }

  async listarTarefas(id?: number) {
    const tarefasQuery = await getConnection()
      .createQueryBuilder()
      .select('t')
      .from(Tarefa, 't');

    if (id) tarefasQuery.andWhere('t.membro=:membroId', { membroId: id });

    const tarefas = tarefasQuery.getMany();

    return tarefas;
  }
}
