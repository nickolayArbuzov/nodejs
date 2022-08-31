import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('video')
export class Video {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

}