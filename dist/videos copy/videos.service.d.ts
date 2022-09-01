import { Repository } from 'typeorm';
import { Video } from './videos.entity';
import { CreateVideoDto } from './dto/create-video.dto';
export declare class VideoService {
    private videoRepository;
    constructor(videoRepository: Repository<Video>);
    findAll(): Promise<Video[]>;
    findOne(id: any): Promise<Video>;
    createVideo(dto: CreateVideoDto): Promise<Video>;
    deleteVideo(id: any): Promise<void>;
}
