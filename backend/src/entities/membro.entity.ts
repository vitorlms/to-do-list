import { Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Membro {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  @Length(5)
  nome: string;
}
