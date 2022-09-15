import {Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, ParseUUIDPipe, Post, Put, Query, Req, UseGuards} from '@nestjs/common';
import { Request } from 'express';
import {PostService} from "./post.service";
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { AuthGuard } from '../guards/auth.guard';
import { QueryBlogDto } from '../commonDTO/query.dto';
import { CommentService } from '../comments/comment.service';
import { CreateCommentDto } from '../comments/dto/comment.dto';


@Controller('posts')
export class PostController {

    constructor(
        private postService: PostService,
        private commentService: CommentService,
    ) {}
    @Get()
    getAll(@Query() query: QueryBlogDto) {
        return this.postService.findAll(query);
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.postService.findOne(id)
    }

    @Get(':id/comments')
    async getCommentsByPostId(@Param('id') id: string) {
        const post = await this.postService.findOne(id)
        if (post){
            return this.commentService.findOne(id)
        } else {
            throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
        }
    }

    @UseGuards(AuthGuard)
    @Post()
    create(@Body() postDto: CreatePostDto) {
        return this.postService.createPost(postDto)
    }

    @Post(':id/comments')
    async createCommentForPostId(@Param('id') id: string, @Body() commentDto: CreateCommentDto, @Req() req: Request) {
        console.log('req', req)
        console.log('commentDto', commentDto)
        const post = await this.postService.findOne(id)
        if (post){
            return this.commentService.create(id, commentDto)
        } else {
            throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
        }
    }

    @UseGuards(AuthGuard)
    @HttpCode(204)
    @Delete(':id')
    delete(@Param('id') id: string){
        return this.postService.deletePost(id)
    }

    @UseGuards(AuthGuard)
    @HttpCode(204)
    @Put(':id')
    update(@Param('id') id: string, @Body() postDto: UpdatePostDto){
        return this.postService.updatePost(id, postDto)
    }

}