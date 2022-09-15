import { Inject, Injectable } from '@nestjs/common';
import { Blogger } from '../blogger/blogger.entity';
import { Post } from '../posts/post.entity';
import { User } from '../users/user.entity';
import { Video } from '../videos/videos.entity';
import { Repository } from 'typeorm';
import { Comment } from '../comments/comment.entity';

@Injectable()
export class AllDataService {
  constructor(
    @Inject('VIDEO_REPOSITORY')
    private readonly videoRepository: Repository<Video>,
    @Inject('BLOGGER_REPOSITORY') 
    private readonly bloggerRepository: Repository<Blogger>,
    @Inject('POST_REPOSITORY')
    private readonly postRepository: Repository<Post>,
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
    @Inject('COMMENT_REPOSITORY')
    private readonly commentRepository: Repository<Comment>,
  ) {}

  deleteAllData(): void {
    this.videoRepository.delete({})
    this.postRepository.delete({})
    this.bloggerRepository.delete({})
    this.userRepository.delete({})
    this.commentRepository.delete({})
  }
  
}