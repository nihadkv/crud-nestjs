import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Crud {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
