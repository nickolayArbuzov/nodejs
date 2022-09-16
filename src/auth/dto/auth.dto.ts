import { IsString, Length } from "class-validator";

export class RegistrationEmailResendingDto {
    
    @IsString()
    readonly email: string;

}

export class AuthDto {
    
    @IsString()
    readonly login: string;

    @IsString()
    readonly password: string;
}

export class RegistrationDto {

    @IsString()
    readonly login: string;

    @IsString()
    readonly password: string;

    @IsString()
    readonly email: string;

}

export class RegistrationConfirmationDto {

    @IsString()
    readonly code: string;

}




