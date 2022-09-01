import { CommentService } from "./comment.service";
import { CreateCommentDto } from './dto/create-comment.dto';
export declare class CommentController {
    private commentService;
    constructor(commentService: CommentService);
    create(commentDto: CreateCommentDto): void;
    getAll(): string;
}
