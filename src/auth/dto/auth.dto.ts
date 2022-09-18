import { IsString, Length, Matches, Validate } from "class-validator";
import { UserIsExistRule } from "../../users/customValidateUser";

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
    @Length(3, 10)
    readonly login: string;

    @IsString()
    @Length(6, 20)
    readonly password: string;
    
    @Validate(UserIsExistRule)
    @IsString()
    @Matches(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4}$)/)
    readonly email: string;

}

export class RegistrationConfirmationDto {

    @IsString()
    readonly code: string;

}




