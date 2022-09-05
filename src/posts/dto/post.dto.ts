import { IsString, Length } from "class-validator";

export class CreatePostDto {
    @IsString()
    @Length(1, 30)
    readonly title: string;

    @IsString()
    @Length(1, 10)
    readonly shortDescription: string;
    
    @IsString()
    @Length(1, 1000)
    readonly content: string;

    readonly bloggerId: string;
}

export class UpdatePostDto extends CreatePostDto {}