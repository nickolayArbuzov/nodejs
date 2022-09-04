import { IsString, Length, IsNumber, ValidateIf, IsBoolean, Min, Max, IsEnum, IsIn} from 'class-validator';

export class CreateVideoDto {

    @IsString()
    @Length(1, 40)
    readonly title: string;

    @IsString()
    @Length(1, 20)
    readonly author: string;

    readonly canBeDownloaded: boolean;

    @IsNumber()
    @Min(1)
    @Max(18)
    //@ValidateIf((object, value) => value !== null)
    readonly minAgeRestriction: number | null;

    @IsIn(['P144', 'P240', 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160'])
    readonly availableResolutions: string[];
}

export class UpdateVideoDto {

    @IsString()
    @Length(1, 40)
    readonly title: string;

    @IsString()
    @Length(1, 20)
    readonly author: string;

    @IsBoolean()
    readonly canBeDownloaded: boolean;

    @IsNumber()
    @Min(1)
    @Max(18)
    //@ValidateIf((object, value) => value !== null)
    readonly minAgeRestriction: number | null;

    readonly availableResolutions: string[];

    readonly publicationDate: string;
}