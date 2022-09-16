import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import {AuthService} from "./auth.service";
import { AuthDto, RegistrationConfirmationDto, RegistrationDto, RegistrationEmailResendingDto } from './dto/auth.dto';


@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @HttpCode(200)
    @Post('login')
    login(@Body() authDto: AuthDto ){
        return this.authService.login(authDto)
    }

    @Post('registration')
    registration(@Body() registrationDto: RegistrationDto ){
        return this.authService.registration(registrationDto)
    }

    @Post('registration-confirmation')
    registrationConfirmation(@Body() registrationConfirmationDto: RegistrationConfirmationDto ){
        return this.authService.registrationConfirmation(registrationConfirmationDto)
    }

    @Post('registration-email-resending')
    registrationEmailResending(@Body() registrationEmailResendingDto: RegistrationEmailResendingDto ){
        return this.authService.registrationEmailResending(registrationEmailResendingDto)
    }

}