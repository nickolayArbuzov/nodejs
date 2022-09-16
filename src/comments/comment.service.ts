import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { CreateCommentDto } from './dto/comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @Inject('COMMENT_REPOSITORY')
    private commentRepository: Repository<Comment>,
  ) {}

  async findOne(id: string) {
    const donorCommnet = await this.commentRepository.findOne({where: {id: id}});
    if(donorCommnet) {
      console.log('oneComment', donorCommnet)
      return donorCommnet
    } else {
      throw new HttpException('Comment not found', HttpStatus.NOT_FOUND);
    }
  }

  async create(postId: string, dto: CreateCommentDto, user: {id: string, login: string}) {
    const newComment = new Comment()
    newComment.content = dto.content
    newComment.postId = postId
    newComment.userId = user.id
    newComment.userLogin = user.login
    let date = new Date
    newComment.createdAt = date.toISOString()
    const post = await this.commentRepository.insert(newComment);
    return {
      content: newComment.content, 
      createdAt: newComment.createdAt, 
      id: newComment.id, 
      userId: newComment.userId, 
      userLogin: newComment.userLogin,
    }
  }

  async updateOne(id: string, dto: CreateCommentDto) {
    const donorComment = await this.commentRepository.findOne({where: {id: id}});
    if(donorComment) {
      const newComment = {
        ...donorComment,
        content: dto.content,
      } 
      const comment = await this.commentRepository.update(id, newComment);
      return newComment;
    } else {
      throw new HttpException('Comment not found', HttpStatus.NOT_FOUND);
    }
  }

  async deleteOne(id: string) {
    const donorComment = await this.commentRepository.findOne({where: {id: id}});
    if(donorComment) {
      await this.commentRepository.delete(id)
    } else {
      throw new HttpException('Comment not found', HttpStatus.NOT_FOUND);
    }
  }


}