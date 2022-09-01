import { DataSource } from 'typeorm';
import { Video } from './videos.entity';
export declare const videoProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Video>;
    inject: string[];
}[];
