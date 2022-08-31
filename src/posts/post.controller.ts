import {Body, Controller, Get, Post} from '@nestjs/common';
import {PostService} from "./post.service";
import { CreatePostDto } from './dto/create-post.dto';


@Controller('posts')
export class PostController {

    constructor(private postService: PostService) {}

    @Post()
    create(@Body() postDto: CreatePostDto) {
        return this.postService.createPost(postDto)
    }

    @Get()
    getAll() {
        return this.postService.findAll();
    }

}