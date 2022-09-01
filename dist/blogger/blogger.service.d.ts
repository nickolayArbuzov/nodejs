import { PostService } from '../posts/post.service';
import { Repository } from 'typeorm';
import { Blogger } from './blogger.entity';
import { CreateBloggerDto } from './dto/create-blogger.dto';
export declare class BloggerService {
    private bloggerRepository;
    private readonly postService;
    constructor(bloggerRepository: Repository<Blogger>, postService: PostService);
    findAll(): Promise<Blogger[]>;
    createBlogger(dto: CreateBloggerDto): Promise<import("typeorm").InsertResult>;
    deleteBlogger(id: any): Promise<"success" | "fail">;
}
