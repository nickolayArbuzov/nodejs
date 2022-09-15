import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {CommentService} from "./comment.service";
import { CreateCommentDto } from './dto/comment.dto'


@Controller('comments')
export class CommentController {

    constructor(private commentService: CommentService) {}

    @Get('id')
    getOne(@Param('id') id: string) {
        return this.commentService.findOne(id)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() commentDto: CreateCommentDto) {
        return this.commentService.updateOne(id, commentDto)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.commentService.deleteOne(id)
    }

}