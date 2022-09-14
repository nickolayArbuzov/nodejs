import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import {AuthService} from "./auth.service";
import { AuthDto } from './dto/auth.dto';


@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('login')
    login(@Body() authDto: AuthDto ){
        console.log('authDto-controller', authDto)
        this.authService.login(authDto)
    }

}