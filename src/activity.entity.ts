import { Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class Activity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  authorId: string;

  @Column()
  description: string;

  @Column()
  sourceObjectId: string;
}
