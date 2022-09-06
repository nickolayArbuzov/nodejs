import {Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, ParseUUIDPipe, Post, Put} from '@nestjs/common';
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
    getOne(@Param('id') id: string) {
        return this.bloggerService.findOne(id)
    }

    @Post()
    create(@Body() bloggerDto: CreateBloggerDto) {
        return this.bloggerService.createBlogger(bloggerDto);
    }

    @HttpCode(204)
    @Delete(':id')
    delete(@Param('id') id: string){
        return this.bloggerService.deleteBlogger(id)
    }

    @HttpCode(204)
    @Put(':id')
    update(@Param('id') id: string, @Body() bloggerDto: UpdateBloggerDto){
        return this.bloggerService.updateBlogger(id, bloggerDto)
    }

}