import { BloggerService } from "./blogger.service";
import { CreateBloggerDto } from './dto/create-blogger.dto';
export declare class BloggerController {
    private bloggerService;
    constructor(bloggerService: BloggerService);
    getAll(): Promise<import("./blogger.entity").Blogger[]>;
    create(bloggerDto: CreateBloggerDto): Promise<import("typeorm").InsertResult>;
    delete(id: number): Promise<"success" | "fail">;
    update(): void;
}
