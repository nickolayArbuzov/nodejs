import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
export declare class CommentService {
    private commentRepository;
    constructor(commentRepository: Repository<Comment>);
    createComment(dto: CreateCommentDto): Promise<Comment>;
    findAll(): Promise<Comment[]>;
}
