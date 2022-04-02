import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CriarTarefaDto } from './dto/criar-tarefa.dto';
import { TarefaService } from './tarefa.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly tarefaService: TarefaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('tarefa')
  async cadastrarTarefa(criarTarefaDto: CriarTarefaDto) {
    await this.tarefaService.cadastrarTarefa(criarTarefaDto);
  }
}
