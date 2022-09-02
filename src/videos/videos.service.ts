import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Video } from './videos.entity';
import { CreateVideoDto } from './dto/create-video.dto';
import { addDays } from '../helpers/date';

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
    return this.videoRepository.findOne({where: {id: id}});
  }

  async createVideo(dto: CreateVideoDto) {
    const newVideo = new Video()
    newVideo.title = dto.title
    newVideo.author = dto.author
    newVideo.availableResolutions = dto.availableResolutions
    newVideo.minAgeRestriction = null
    let date = new Date
    newVideo.createdAt = date.toISOString()
    newVideo.publicationDate = addDays(date, 1).toISOString()
    const video = await this.videoRepository.insert(newVideo);
    return newVideo;
  }

  async updateVideo(id: number, dto: CreateVideoDto) {
    const donorVideo = await this.videoRepository.findOne({where: {id: id}});
    const newVideo = {
      ...donorVideo, 
      title: dto.title, 
      author: dto.author, 
      availableResolutions: dto.availableResolutions,
      minAgeRestriction: dto.minAgeRestriction,
      canBeDownloaded: dto.canBeDownloaded,
    }
    const video = await this.videoRepository.update(id, newVideo);
    return newVideo;
  }

  async deleteVideo(id) {
    await this.videoRepository.delete(id)
  }
  async deleteAllVideos(): Promise<void> {
    await this.videoRepository.clear()
  }
  
}