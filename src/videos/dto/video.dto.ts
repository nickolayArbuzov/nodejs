import { IsString, Length, IsNumber, ValidateIf} from 'class-validator';

export class CreateVideoDto {
    @IsString()
    @Length(1, 40)
    readonly title: string;
    @IsString()
    @Length(1, 20)
    readonly author: string;
    readonly canBeDownloaded: boolean;
    @IsNumber()
    @ValidateIf((object, value) => value !== null)
    readonly minAgeRestriction: number | null;
    readonly availableResolutions: string[];
}

export class UpdateVideoDto extends CreateVideoDto{
    readonly publicationDate: string;
}