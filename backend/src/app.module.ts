import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Membro } from './entities/membro.entity';
import { Tarefa } from './entities/tarefa.entity';
import { MembroService } from './membro.service';
import { TarefaService } from './tarefa.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '172.17.0.3',
      port: 3306,
      username: 'vitor',
      password: 'docker',
      database: 'mysqldb',
      entities: [Tarefa, Membro],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, TarefaService, MembroService],
})
export class AppModule {}
