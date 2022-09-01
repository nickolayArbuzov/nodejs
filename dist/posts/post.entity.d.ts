import { Blogger } from '../blogger/blogger.entity';
export declare class Post {
    id: number;
    title: string;
    shortDescription: string;
    content: string;
    bloggerId: number;
    blogger: Blogger;
}
