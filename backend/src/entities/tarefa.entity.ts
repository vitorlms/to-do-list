import { Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tarefa {
  @PrimaryGeneratedColumn('increment')
  id!: number;

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
