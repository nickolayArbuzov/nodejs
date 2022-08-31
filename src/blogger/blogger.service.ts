import { Injectable, Inject } from '@nestjs/common';
import { Post } from '../posts/post.entity';
import { PostService } from '../posts/post.service';
import { Repository } from 'typeorm';
import { Blogger } from './blogger.entity';
import { CreateBloggerDto } from './dto/create-blogger.dto';

@Injectable()
export class BloggerService {
  constructor(
    @Inject('BLOGGER_REPOSITORY') 
    private bloggerRepository: Repository<Blogger>,
    private readonly postService: PostService,
  ) {}

  async findAll() {
    return this.bloggerRepository.find({relations: ['posts']});
  }
  
  async createBlogger(dto: CreateBloggerDto) {
    const newBlogger = new Blogger()
    newBlogger.name = dto.name
    newBlogger.url = dto.url
    const blogger = await this.bloggerRepository.insert(newBlogger);
    return blogger;
  }

  async deleteBlogger(id) {
    try {
      await this.bloggerRepository.delete(id)
      return "success"
    } catch (e) {
      return "fail"
    }
  }
  
}