import { Injectable } from '@nestjs/common';
import { VideoService } from '../videos/videos.service';

@Injectable()
export class AllDataService {
  constructor(
    private readonly videoService: VideoService
  ) {}

  deleteAllData(): void {
    this.videoService.deleteAllVideos()
  }
  
}