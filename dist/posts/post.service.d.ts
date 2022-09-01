import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './post.entity';
export declare class PostService {
    private postRepository;
    constructor(postRepository: Repository<Post>);
    findAll(): Promise<Post[]>;
    createPost(dto: CreatePostDto): Promise<import("typeorm").InsertResult>;
}
