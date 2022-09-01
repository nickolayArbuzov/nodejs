import { DataSource } from 'typeorm';
export declare const videoProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<import("typeorm").ObjectLiteral>;
    inject: string[];
}[];
