import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import {CommentService} from "./comment.service";
import { CreateCommentDto } from './dto/comment.dto'


@Controller('comments')
export class CommentController {

    constructor(private commentService: CommentService) {}

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.commentService.findOne(id)
    }

    @HttpCode(204)
    @Put(':id')
    update(@Param('id') id: string, @Body() commentDto: CreateCommentDto) {
        return this.commentService.updateOne(id, commentDto)
    }

    @HttpCode(204)
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.commentService.deleteOne(id)
    }

}