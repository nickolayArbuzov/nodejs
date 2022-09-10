import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Post } from '../posts/post.entity';
import { PostService } from '../posts/post.service';
import { Repository } from 'typeorm';
import { Blogger } from './blogger.entity';
import { CreateBloggerDto, UpdateBloggerDto } from './dto/blogger.dto';
import { QueryDto } from '../commonDTO/query.dto';
import { queryDefault } from '../constants/constants';


@Injectable()
export class BloggerService {
  constructor(
    @Inject('BLOGGER_REPOSITORY') 
    private readonly bloggerRepository: Repository<Blogger>,
    @Inject('BLOGGER_REPOSITORY') 
    private readonly postRepository: Repository<Post>,
  ) {}

  async findAllPostsByBlogId(id: string, query: QueryDto) {

    const blog = await this.bloggerRepository.findOne({where: {id: id}})

    if(blog) {
      const repo = this.bloggerRepository.createQueryBuilder('blog')

      const all = await repo
        .leftJoinAndSelect('blog.posts', 'posts')
        .where({id: id})
        .skip((+queryDefault.pageNumber-1) * +queryDefault.pageSize)
        .take(+queryDefault.pageSize)
        .orderBy(`posts.${queryDefault.sortBy}`, queryDefault.sortDirection)
        .getOne()
      console.log(all)
      const count = await repo.getCount()
      //TODO: automapper
      //TODO: property order in returned obj's
      const returnedPosts = all.posts.map(a => {
        return {content: a.content, shortDescription: a.shortDescription, title: a.title, blogId: a.blogId, blogName: a.blogName, createdAt: a.createdAt, id: a.id}
      })
      return {pagesCount: Math.ceil(count/+queryDefault.pageSize), page: queryDefault.pageNumber, pageSize: queryDefault.pageSize, totalCount: count, items: returnedPosts}
    } else {
      throw new HttpException('Blogger not found', HttpStatus.NOT_FOUND);
    }
  }

  async createPostByBlogId(){
    
  }

  async findAll(query: QueryDto) {
    console.log('query', query)
    const repo = this.bloggerRepository.createQueryBuilder('blog')

    const all = await repo
      .skip((+queryDefault.pageNumber-1) * +queryDefault.pageSize)
      .take(+queryDefault.pageSize)
      .orderBy(`blog.${queryDefault.sortBy}`, queryDefault.sortDirection)
      .getMany()

    const count = await repo.getCount()
    //TODO: automapper
    //TODO: property order in returned obj's
    const returnedBlogs = all.map(a => {return {name: a.name, youtubeUrl: a.youtubeUrl, createdAt: a.createdAt, id: a.id}})
    return {pagesCount: Math.ceil(count/+queryDefault.pageSize), page: queryDefault.pageNumber, pageSize: queryDefault.pageSize, totalCount: count, items: returnedBlogs}
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