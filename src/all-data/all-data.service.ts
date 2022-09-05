import { Injectable } from '@nestjs/common';
import { BloggerService } from '../blogger/blogger.service';
import { PostService } from '../posts/post.service';
import { VideoService } from '../videos/videos.service';

@Injectable()
export class AllDataService {
  constructor(
    private readonly videoService: VideoService,
    private readonly bloggerService: BloggerService,
    private readonly postService: PostService,
  ) {}

  deleteAllData(): void {
    this.videoService.deleteAllVideos()
    this.postService.deleteAllPosts()
    this.bloggerService.deleteAllBloggers()
  }
  
}