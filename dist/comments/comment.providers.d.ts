import { DataSource } from 'typeorm';
import { Comment } from './comment.entity';
export declare const commentProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Comment>;
    inject: string[];
}[];
