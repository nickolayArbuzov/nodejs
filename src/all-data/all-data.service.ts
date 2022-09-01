import { Injectable, Inject } from '@nestjs/common';
import { VideoService } from '../videos/videos.service';
import { Repository } from 'typeorm';
import { Video } from '../videos/videos.entity';

@Injectable()
export class AllDataService {
  constructor(
    private readonly videoService: VideoService
  ) {}

  async deleteAllData() {
    await this.videoService.deleteAllVideos()
  }
  
}