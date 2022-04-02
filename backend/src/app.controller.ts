import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CriarMembroDto } from './dto/criar-membro.dto';
import { CriarTarefaDto } from './dto/criar-tarefa.dto';
import { EditarTarefaDto } from './dto/editar-tarefa.dto';
import { MembroService } from './membro.service';
import { TarefaService } from './tarefa.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly tarefaService: TarefaService,
    private readonly membroService: MembroService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('membro')
  async cadastrarMembro(@Body() criarMembroDto: CriarMembroDto) {
    await this.membroService.cadastrarMembro(criarMembroDto);
  }

  @Post('tarefa')
  async cadastrarTarefa(@Body() criarTarefaDto: CriarTarefaDto) {
    await this.tarefaService.cadastrarTarefa(criarTarefaDto);
  }

  @Get('tarefa/:id')
  async findOne(@Param('id') id: string) {
    return this.tarefaService.listarTarefas(+id);
  }

  @Patch('tarefa')
  async editarTarefa(@Body() editarTarefaDto: EditarTarefaDto) {
    await this.tarefaService.editarTarefa(editarTarefaDto);
  }
}
