import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Video } from './videos.entity';
import { CreateVideoDto, UpdateVideoDto } from './dto/video.dto';
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
    try {
      return this.videoRepository.findOne({where: {id: id}});
    } catch {
      throw new HttpException('Video not found', HttpStatus.NOT_FOUND);
    }
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

  async updateVideo(id: number, dto: UpdateVideoDto) {
    try {
      const donorVideo = await this.videoRepository.findOne({where: {id: id}});
      const newVideo = {
        ...donorVideo, 
        title: dto.title, 
        author: dto.author, 
        availableResolutions: dto.availableResolutions,
        minAgeRestriction: dto.minAgeRestriction,
        canBeDownloaded: dto.canBeDownloaded,
        publicationDate: dto.publicationDate,
      } 
      const video = await this.videoRepository.update(id, newVideo);
      return newVideo;
    } catch {
      throw new HttpException('Video not found', HttpStatus.NOT_FOUND);
    }
  }

  async deleteVideo(id) {
    try {
      await this.videoRepository.delete(id)
    } catch {
      throw new HttpException('Video not found', HttpStatus.NOT_FOUND);
    }
    
  }
  async deleteAllVideos(): Promise<void> {
    await this.videoRepository.clear()
  }
  
}