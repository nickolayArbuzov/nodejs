import {Body, Controller, Delete, Get, HttpCode, Inject, Param, ParseIntPipe, ParseUUIDPipe, Post, Put, Query, UseGuards} from '@nestjs/common';
import { CreatePostDto } from '../posts/dto/post.dto';
import { PostService } from '../posts/post.service';
import { AuthGuard } from '../guards/auth.guard';
import {BloggerService} from "./blogger.service";
import { CreateBloggerDto, UpdateBloggerDto } from './dto/blogger.dto';
import { QueryDto } from '../commonDTO/query.dto';


@Controller('blogs')
export class BloggerController {

    constructor(
        private bloggerService: BloggerService,
        private postService: PostService,
    ) {}
    @Get()
    getAll(@Query() query: QueryDto) {
        return this.bloggerService.findAll(query);
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.bloggerService.findOne(id)
    }

    @Get(':id/posts') 
    getPostByBlogId(@Param('id') id: string) { 
        return this.bloggerService.findAllPostsByBlogId(id)
    }

    @UseGuards(AuthGuard)
    @Post()
    create(@Body() bloggerDto: CreateBloggerDto) {
        return this.bloggerService.createBlogger(bloggerDto);
    }

    @Post(':id/posts') 
    creatPostForBlogId(@Param('id') id: string, @Body() any: any) {
        return this.postService.creatPostForBlogId(id, any)
    }

    @UseGuards(AuthGuard)
    @HttpCode(204)
    @Delete(':id')
    delete(@Param('id') id: string){
        return this.bloggerService.deleteBlogger(id)
    }

    @UseGuards(AuthGuard)
    @HttpCode(204)
    @Put(':id')
    update(@Param('id') id: string, @Body() bloggerDto: UpdateBloggerDto){
        return this.bloggerService.updateBlogger(id, bloggerDto)
    }

}