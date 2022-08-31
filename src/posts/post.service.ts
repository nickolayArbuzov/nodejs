import { Injectable, Inject } from '@nestjs/common';
import { Blogger } from '../blogger/blogger.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @Inject('POST_REPOSITORY') private postRepository: Repository<Post>,
  ) {}

  async findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async createPost(dto: CreatePostDto) {
    const newPost = new Post()
    newPost.content = dto.content
    newPost.shortDescription = dto.shortDescription
    newPost.title = dto.title
    newPost.bloggerId = Number(dto.bloggerId)
    const post = await this.postRepository.insert(newPost);
  
    return post;
  }

}