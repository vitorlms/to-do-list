import { Length } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tarefa } from './tarefa.entity';

@Entity()
export class Membro {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  @Length(5)
  nome: string;

  @OneToMany(() => Tarefa, (tarefa) => tarefa.membro)
  tarefas: Tarefa[];
}
