import { Length } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Membro } from './membro.entity';

@Entity()
export class Tarefa {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @ManyToOne(() => Membro, (membro) => membro.tarefas)
  @JoinColumn()
  membro: Membro;

  @Column({ nullable: false })
  @Length(5, 50)
  nome: string;

  @Column({ length: 140 })
  descricao: string;

  @Column({ nullable: false, default: false })
  finalizada: boolean;

  @Column()
  dataTermino: Date;

  @Column({
    nullable: false,
    default: 'Baixa',
    enum: ['Baixa', 'Média', 'Alta'],
  })
  prioridade: string;
}
