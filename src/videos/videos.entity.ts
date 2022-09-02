import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('video')
export class Video {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  title: string;

  @Column({ length: 20 })
  author: string;

  @Column('text', {array: true})
  availableResolutions: string[];

  @Column({default: false})
  canBeDownloaded: boolean;

  @Column({ nullable: true })
  minAgeRestriction: number;

  @Column()
  publicationDate: Date;
}