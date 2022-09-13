import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export abstract class Activity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  authorId: string;

  @Column()
  description: string;

  @Column()
  sourceObjectId: string;

  @CreateDateColumn()
  createdDate: Date;
}
