import { Inject, Injectable } from '@nestjs/common';
import { Blogger } from 'src/blogger/blogger.entity';
import { Repository } from 'typeorm';
import { BloggerService } from '../blogger/blogger.service';
import { PostService } from '../posts/post.service';
import { VideoService } from '../videos/videos.service';

@Injectable()
export class AllDataService {
  constructor(
    private readonly videoService: VideoService,
    @Inject('BLOGGER_REPOSITORY') 
    private readonly bloggerRepository: Repository<Blogger>,
    private readonly postService: PostService,
  ) {}

  deleteAllData(): void {
    this.videoService.deleteAllVideos()
    this.postService.deleteAllPosts()
    this.bloggerRepository.delete({})
  }
  
}