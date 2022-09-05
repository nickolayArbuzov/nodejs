import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Post } from '../posts/post.entity';
import { PostService } from '../posts/post.service';
import { Repository } from 'typeorm';
import { Blogger } from './blogger.entity';
import { CreateBloggerDto, UpdateBloggerDto } from './dto/blogger.dto';

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

  async findOne(id: number) {
    const donorBlogger = await this.bloggerRepository.findOne({where: {id: id}});
    if(donorBlogger) {
      return donorBlogger
    } else {
      throw new HttpException('Blogger not found', HttpStatus.NOT_FOUND);
    }
  }
  
  async createBlogger(dto: CreateBloggerDto) {
    const newBlogger = new Blogger()
    newBlogger.name = dto.name
    newBlogger.url = dto.url
    const blogger = await this.bloggerRepository.insert(newBlogger);
    return blogger;
  }

  async updateBlogger(id: number, dto: UpdateBloggerDto) {
    const donorBlogger = await this.bloggerRepository.findOne({where: {id: id}});
    if(donorBlogger) {
      const newBlogger = {
        ...donorBlogger, 
        name: dto.name,
        url: dto.url,
      } 
      const blogger = await this.bloggerRepository.update(id, newBlogger);
      return newBlogger;
    } else {
      throw new HttpException('Blogger not found', HttpStatus.NOT_FOUND);
    }
  }

  async deleteBlogger(id: number) {
    try {
      await this.bloggerRepository.delete(id)
      return "success"
    } catch (e) {
      return "fail"
    }
  }

  async deleteAllBloggers(): Promise<void> {
    await this.bloggerRepository.delete({})
  }
  
}