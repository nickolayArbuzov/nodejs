import { Blogger } from '../blogger/blogger.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('post')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  title: string;

  @Column({ length: 100 })
  shortDescription: string;

  @Column({ length: 1000 })
  content: string;

  @Column()
  bloggerId: number;

  @ManyToOne(() => Blogger, blogger => blogger.posts, {onDelete: 'SET NULL'})
  blogger: Blogger
  
}