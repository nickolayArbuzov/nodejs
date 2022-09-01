import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Video } from './videos.entity';
import { CreateVideoDto } from './dto/create-video.dto';

@Injectable()
export class VideoService {
  constructor(
    @Inject('VIDEO_REPOSITORY')
    private videoRepository: Repository<Video>,
  ) {}

  async findAll() {
    return this.videoRepository.find();
  }

  async findOne(id) {
    return this.videoRepository.findOne(id);
  }

  async createVideo(dto: CreateVideoDto) {
    const newVideo = new Video()
    newVideo.title = dto.title
    newVideo.author = dto.author
    newVideo.availableResolutions = dto.availableResolutions
    newVideo.publicationDate = new Date
    const video = await this.videoRepository.insert(newVideo);
    return newVideo;
  }

  async deleteVideo(id) {
    await this.videoRepository.delete(id)
  }
  async deleteAllVideos(): Promise<void> {
    await this.videoRepository.clear()
  }
  
}