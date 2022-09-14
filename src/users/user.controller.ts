import {Body, Controller, Delete, Get, HttpCode, Param, Post, Query} from '@nestjs/common';
import {UserService} from "./user.service";
import { CreateUserDto } from './dto/create-user.dto';
import { QueryDto } from '../commonDTO/query.dto';


@Controller('users')
export class UserController {

    constructor(private userService: UserService) {}

    @Get()
    getAll(@Query() query: QueryDto) {
        return this.userService.findAll(query)
    }

    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto)
    }

    @HttpCode(204)
    @Delete(':id')
    delete(@Param('id') id: string){
        return this.userService.deleteUser(id)
    }

}