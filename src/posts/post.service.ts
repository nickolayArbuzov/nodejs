import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Blogger } from '../blogger/blogger.entity';
import { Repository } from 'typeorm';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { Post } from './post.entity';
import { BloggerService } from '../blogger/blogger.service';

@Injectable()
export class PostService {
  constructor(
    @Inject('POST_REPOSITORY') 
    private readonly postRepository: Repository<Post>,
    private readonly bloggerService: BloggerService,
  ) {}


  async findAll() {
    const all = await this.postRepository.find();
    // TODO: automapper
    return all.map(a => {return {...a, id: a.id.toString()}})
  }

  async findOne(id: string) {
    const donorPost = await this.postRepository.findOne({where: {id: id}});
    if(donorPost) {
      // TODO something with id(number => string)
      return {...donorPost, id: donorPost.id.toString()}
    } else {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
  }

  async createPost(dto: CreatePostDto) {
    const bloggerName = await this.bloggerService.findOne(dto.bloggerId)
    const newPost = new Post()
    newPost.content = dto.content
    newPost.shortDescription = dto.shortDescription
    newPost.title = dto.title
    newPost.bloggerId = dto.bloggerId
    newPost.bloggerName = bloggerName.name
    const post = await this.postRepository.insert(newPost);
    // TODO something with id(number => string)
    return {...newPost, id: newPost.id.toString()};
  }

  async updatePost(id: string, dto: UpdatePostDto) {
    const donorPost = await this.postRepository.findOne({where: {id: id}});
    if(donorPost) {
      // TODO something with id(number => string)
      const newPost = {
        ...donorPost, 
        id: donorPost.id.toString(),
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

  async deleteAllPosts(): Promise<void> {
    await this.postRepository.delete({})
  }

}