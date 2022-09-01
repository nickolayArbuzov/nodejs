import { VideoService } from '../videos/videos.service';
export declare class AllDataService {
    private readonly videoService;
    constructor(videoService: VideoService);
    deleteAllData(): Promise<void>;
}
