import { IsString, Length, IsNumber, ValidateIf, IsBoolean, Min, Max, IsEnum, IsIn, IsOptional} from 'class-validator';

export enum availableResolutions {
    P144 = 'P144',
    P240 = 'P240',
    P360 = 'P360',
    P480 = 'P480',
    P720 = 'P720',
    P1080 = 'P1080',
    P1440 = 'P1440',
    P2160 = 'P2160',
}

export class CreateVideoDto {

    @IsString()
    @Length(1, 40)
    readonly title: string;

    @IsString()
    @Length(1, 20)
    readonly author: string;

    
    readonly canBeDownloaded: boolean;

    @IsOptional()
    @IsNumber()
    @Min(1)
    @Max(18)
    //@ValidateIf(value => value !== undefined)
    readonly minAgeRestriction: number | undefined;

    @IsEnum(availableResolutions, {each: true}) //custom
    readonly availableResolutions: availableResolutions[];
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

    @IsOptional()
    @IsNumber()
    @Min(1)
    @Max(18)
    @ValidateIf(value => value !== undefined)
    readonly minAgeRestriction: number | undefined;

    @IsEnum(availableResolutions, {each: true})
    readonly availableResolutions: availableResolutions[];

    readonly publicationDate: string;
}