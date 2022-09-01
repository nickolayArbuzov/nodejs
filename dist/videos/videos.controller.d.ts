import { VideoService } from "./videos.service";
import { CreateVideoDto } from './dto/create-video.dto';
export declare class VideoController {
    private videoService;
    constructor(videoService: VideoService);
    getAll(): Promise<import("./videos.entity").Video[]>;
    getOne(id: number): Promise<import("./videos.entity").Video>;
    create(videoDto: CreateVideoDto): Promise<import("./videos.entity").Video>;
    delete(id: number): number;
    update(): void;
}
