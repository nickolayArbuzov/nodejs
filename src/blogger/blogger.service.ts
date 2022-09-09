import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Post } from '../posts/post.entity';
import { PostService } from '../posts/post.service';
import { Repository } from 'typeorm';
import { Blogger } from './blogger.entity';
import { CreateBloggerDto, UpdateBloggerDto } from './dto/blogger.dto';
import { QueryDto } from '../commonDTO/query.dto';


@Injectable()
export class BloggerService {
  constructor(
    @Inject('BLOGGER_REPOSITORY') 
    private readonly bloggerRepository: Repository<Blogger>,
    @Inject('BLOGGER_REPOSITORY') 
    private readonly postRepository: Repository<Post>,
  ) {}

  async findAllPostsByBlogId(id: string) {
    const blogger = await this.bloggerRepository.findOne({relations: ['posts'], where: {id: id}});
    if (blogger) {
      return {pagesCount: Math.ceil(blogger.posts.length/10), page: 1, pageSize :10, totalCount: blogger.posts.length, items: blogger.posts}
    } else {
      throw new HttpException('Blogger not found', HttpStatus.NOT_FOUND);
    }
  
  }

  async createPostByBlogId(){
    
  }

  async findAll(query: QueryDto) {
    const all = await this.bloggerRepository.find({relations: ['posts']});
    // TODO: research QueryBuilder
    /*this.bloggerRepository
    .createQueryBuilder('b')
    .innerJoinAndSelect('b.posts', 'p')
    .where('p.content = :con', { con: 'a'})
    .select('')
    .addSelect('')
    .getMany()*/

    // TODO: automapper
    //TODO: property order in returned obj's
    const returnedBlogs = all.map(a => {return {name: a.name, youtubeUrl: a.youtubeUrl, createdAt: a.createdAt, id: a.id}})
    return {pagesCount: Math.ceil(returnedBlogs.length/10), page: 1, pageSize :10, totalCount: returnedBlogs.length, items: returnedBlogs}
  }

  async findOne(id: string) {
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
    newBlogger.youtubeUrl = dto.youtubeUrl
    let date = new Date
    newBlogger.createdAt = date.toISOString()
    const blogger = await this.bloggerRepository.insert(newBlogger);
    return newBlogger
  }

  async updateBlogger(id: string, dto: UpdateBloggerDto) {
    const donorBlogger = await this.bloggerRepository.findOne({where: {id: id}});
    if(donorBlogger) {
      const newBlogger = {
        ...donorBlogger,
        name: dto.name,
        youtubeUrl: dto.youtubeUrl,
      } 
      const blogger = await this.bloggerRepository.update(id, newBlogger);
      return newBlogger;
    } else {
      throw new HttpException('Blogger not found', HttpStatus.NOT_FOUND);
    }
  }

  async deleteBlogger(id: string) {
    const donorBlogger = await this.bloggerRepository.findOne({where: {id: id}});
    if(donorBlogger) {
      await this.bloggerRepository.delete(id)
    } else {
      throw new HttpException('Blogger not found', HttpStatus.NOT_FOUND);
    }
  }
  
}