import { Transform, TransformFnParams } from "class-transformer";
import { IsOptional, IsString, IsUUID, Length } from "class-validator";
import { BlogIsExist } from "../../helpers/customValidation/blogIsExist";

export class CreatePostDto {
    
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsString()
    @Length(1, 30)
    readonly title: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsString()
    @Length(1, 100)
    readonly shortDescription: string;
    
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsString()
    @Length(1, 1000)
    readonly content: string;

    @IsUUID()
    //@BlogIsExist()
    readonly blogId: string;
}

export class CratePostDtoWithoutBlogId extends CreatePostDto {
    @IsOptional()
    @IsUUID()
    readonly blogId: string;
}

export class UpdatePostDto extends CreatePostDto {}