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
    newVideo.description = 'fds'
    newVideo.name = 'fdsdfd'
    const video = await this.videoRepository.insert(newVideo);
    return newVideo;
  }

  async deleteVideo(id) {
    await this.videoRepository.delete(id)
  }
  async deleteAllVideos() {
    await this.videoRepository.clear()
    console.log(1)
  }
  
}