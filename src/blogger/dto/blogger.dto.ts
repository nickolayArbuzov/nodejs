import { IsString, Length, Matches } from "class-validator";

export class CreateBloggerDto {
    @IsString()
    @Length(1, 15)
    readonly name: string;
    
    @IsString()
    @Length(1, 100)
    @Matches(/^https:([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$/)
    readonly url: string;
}

export class UpdateBloggerDto extends CreateBloggerDto {}