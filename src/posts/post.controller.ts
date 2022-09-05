import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {PostService} from "./post.service";
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';


@Controller('posts')
export class PostController {

    constructor(private postService: PostService) {}

    @Get()
    getAll() {
        return this.postService.findAll();
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number) {
        return this.postService.findOne(id)
    }

    @Post()
    create(@Body() postDto: CreatePostDto) {
        return this.postService.createPost(postDto)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number){
        return this.postService.deletePost(id)
    }

    @Put()
    update(@Param('id', ParseIntPipe) id: number, @Body() postDto: UpdatePostDto){
        return this.postService.updatePost(id, postDto)
    }

}