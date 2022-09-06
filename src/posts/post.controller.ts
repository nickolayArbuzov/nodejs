import {Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Post, Put} from '@nestjs/common';
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
    getOne(@Param('id') id: string) {
        return this.postService.findOne(id)
    }

    @Post()
    create(@Body() postDto: CreatePostDto) {
        return this.postService.createPost(postDto)
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.postService.deletePost(id)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() postDto: UpdatePostDto){
        return this.postService.updatePost(id, postDto)
    }

}