import { DataSource } from 'typeorm';
import { Blogger } from './blogger.entity';
export declare const bloggerProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Blogger>;
    inject: string[];
}[];
