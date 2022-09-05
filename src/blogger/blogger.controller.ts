import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {BloggerService} from "./blogger.service";
import { CreateBloggerDto, UpdateBloggerDto } from './dto/blogger.dto';


@Controller('bloggers')
export class BloggerController {

    constructor(private bloggerService: BloggerService) {}
    @Get()
    getAll() {
        return this.bloggerService.findAll();
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number) {
        return this.bloggerService.findOne(id)
    }

    @Post()
    create(@Body() bloggerDto: CreateBloggerDto) {
        return this.bloggerService.createBlogger(bloggerDto);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number){
        return this.bloggerService.deleteBlogger(id)
    }

    @Put()
    update(@Param('id', ParseIntPipe) id: number, @Body() bloggerDto: UpdateBloggerDto){
        return this.bloggerService.updateBlogger(id, bloggerDto)
    }

}