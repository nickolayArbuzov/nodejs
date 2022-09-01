import { DataSource } from 'typeorm';
import { Post } from './post.entity';
export declare const postProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Post>;
    inject: string[];
}[];
