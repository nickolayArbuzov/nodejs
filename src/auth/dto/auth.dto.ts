import { IsString, Length } from "class-validator";

export class AuthDto {
    
    @IsString()
    @Length(3, 10)
    readonly login: string;

    @IsString()
    @Length(6, 20)
    readonly password: string;
}


