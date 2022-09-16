import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Req, UseGuards} from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from 'src/guards/auth.guard';
import { JWTGuard } from '../guards/jwt.guard';
import {CommentService} from "./comment.service";
import { CreateCommentDto } from './dto/comment.dto'


@Controller('comments')
export class CommentController {

    constructor(private commentService: CommentService) {}

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.commentService.findOne(id)
    }

    @UseGuards(JWTGuard)
    @UseGuards(AuthGuard)
    @HttpCode(204)
    @Put(':id')
    update(@Param('id') id: string, @Body() commentDto: CreateCommentDto, @Req() req: Request) {
        return this.commentService.updateOne(id, commentDto)
    }

    @UseGuards(JWTGuard)
    @UseGuards(AuthGuard)
    @HttpCode(204)
    @Delete(':id')
    delete(@Param('id') id: string, @Req() req: Request) {
        return this.commentService.deleteOne(id, req.user.id)
    }

}