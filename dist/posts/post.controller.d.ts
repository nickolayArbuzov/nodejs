import { PostService } from "./post.service";
import { CreatePostDto } from './dto/create-post.dto';
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    create(postDto: CreatePostDto): Promise<import("typeorm").InsertResult>;
    getAll(): Promise<import("./post.entity").Post[]>;
}
