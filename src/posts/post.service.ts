import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Blogger } from '../blogger/blogger.entity';
import { Repository } from 'typeorm';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { Post } from './post.entity';
import { BloggerService } from '../blogger/blogger.service';
import { QueryDto } from '../commonDTO/query.dto';
import { queryDefault } from '../constants/constants';

@Injectable()
export class PostService {
  constructor(
    @Inject('POST_REPOSITORY') 
    private readonly postRepository: Repository<Post>,
    private readonly bloggerService: BloggerService,
  ) {}

  async findAll(query: QueryDto) {
    console.log('query-findAll', query)
    const repo = this.postRepository.createQueryBuilder('post')

    const all = await repo
      .skip((+queryDefault.pageNumber-1) * +queryDefault.pageSize)
      .take(+queryDefault.pageSize)
      .orderBy(`post.${queryDefault.sortBy}`, queryDefault.sortDirection)
      .getMany()

    const count = await repo.getCount()
    //TODO: automapper
    //TODO: property order in returned obj's
    const returnedPosts = all.map(a => {
      return {content: a.content, shortDescription: a.shortDescription, title: a.title, blogId: a.blogId, blogName: a.blogName, createdAt: a.createdAt, id: a.id}
    })
    return {pagesCount: Math.ceil(count/+queryDefault.pageSize), page: +queryDefault.pageNumber, pageSize: +queryDefault.pageSize, totalCount: count, items: returnedPosts}
  }

  async findAllPostsByBlogId(id: string, query: QueryDto) {

    console.log('query-findAll', query)
    const repo = this.postRepository.createQueryBuilder('post')

    const all = await repo
      .where({blogId: id})
      .skip((+queryDefault.pageNumber-1) * +queryDefault.pageSize)
      .take(+queryDefault.pageSize)
      .orderBy(`post.${queryDefault.sortBy}`, queryDefault.sortDirection)
      .getMany()

    const count = await repo.getCount()
    //TODO: automapper
    //TODO: property order in returned obj's
    const returnedPosts = all.map(a => {
      return {content: a.content, shortDescription: a.shortDescription, title: a.title, blogId: a.blogId, blogName: a.blogName, createdAt: a.createdAt, id: a.id}
    })
    return {pagesCount: Math.ceil(count/+queryDefault.pageSize), page: queryDefault.pageNumber, pageSize: queryDefault.pageSize, totalCount: count, items: returnedPosts}
  } 

  async findOne(id: string) {
    const donorPost = await this.postRepository.findOne({where: {id: id}});
    if(donorPost) {
      return donorPost
    } else {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
  }

  async createPost(dto: CreatePostDto) {
    const donorBlogger = await this.bloggerService.findOne(dto.blogId)
    if (donorBlogger) {
      const newPost = new Post()
      newPost.content = dto.content
      newPost.shortDescription = dto.shortDescription
      newPost.title = dto.title
      newPost.blogId = dto.blogId
      newPost.blogName = donorBlogger.name
      let date = new Date
      newPost.createdAt = date.toISOString()
      const post = await this.postRepository.insert(newPost);
      return newPost
    }
    else {
      throw new HttpException('Blogger for create-post, not found', HttpStatus.NOT_FOUND);
    }
  }

  async creatPostForBlogId(id: string, dto: CreatePostDto){
    const donorBlogger = await this.bloggerService.findOne(id)
    if (donorBlogger) {
      const newPost = new Post()
      newPost.content = dto.content
      newPost.shortDescription = dto.shortDescription
      newPost.title = dto.title
      newPost.blogId = id
      newPost.blogName = donorBlogger.name
      let date = new Date
      newPost.createdAt = date.toISOString()
      const post = await this.postRepository.insert(newPost);
      return newPost
    }
    else {
      throw new HttpException('Blogger for create-post, not found', HttpStatus.NOT_FOUND);
    }
  }

  async updatePost(id: string, dto: UpdatePostDto) {
    const donorPost = await this.postRepository.findOne({where: {id: id}});
    if(donorPost) {
      const newPost = {
        ...donorPost, 
        title: dto.title,
        shortDescription: dto.shortDescription,
        content: dto.content
      } 
      const post = await this.postRepository.update(id, newPost);
      return newPost;
    } else {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
  }

  async deletePost(id: string) {
    const donorPost = await this.postRepository.findOne({where: {id: id}});
    if(donorPost) {
      await this.postRepository.delete(id)
    } else {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
  }

}