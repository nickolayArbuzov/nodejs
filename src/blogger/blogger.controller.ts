import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {BloggerService} from "./blogger.service";
import { CreateBloggerDto } from './dto/create-blogger.dto';


@Controller('bloggers')
export class BloggerController {

    constructor(private bloggerService: BloggerService) {}
    @Get()
    getAll() {
        return this.bloggerService.findAll();
    }

    @Post()
    create(@Body() bloggerDto: CreateBloggerDto) {
        return this.bloggerService.createBlogger(bloggerDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.bloggerService.deleteBlogger(id)
    }

    @Put()
    update(){}

}