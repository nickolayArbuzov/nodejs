import { IsString, Length } from "class-validator";

export class CreatePostDto {
    @IsString()
    @Length(1, 30)
    readonly title: string;

    @IsString()
    @Length(1, 100)
    readonly shortDescription: string;
    
    @IsString()
    @Length(1, 1000)
    readonly content: string;

    @IsString()
    readonly bloggerId: string;
}

export class UpdatePostDto extends CreatePostDto {}