import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {VideoService} from "./videos.service";
import { CreateVideoDto } from './dto/create-video.dto';


@Controller('videos')
export class VideoController {

    constructor(private videoService: VideoService) {}
    @Get()
    getAll() {
        return this.videoService.findAll()
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.videoService.findOne(id)
    }

    @Post()
    create(@Body() videoDto: CreateVideoDto) {
        return this.videoService.createVideo(videoDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        this.videoService.deleteVideo(id)
        return 1
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() videoDto: CreateVideoDto){
        this.videoService.updateVideo(id, videoDto)
    }

}