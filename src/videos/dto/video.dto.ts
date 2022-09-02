export class CreateVideoDto {
    readonly title: string;
    readonly author: string;
    readonly canBeDownloaded: boolean;
    readonly minAgeRestriction: number | null;
    readonly availableResolutions: string[];
}

export class UpdateVideoDto extends CreateVideoDto{
    readonly publicationDate: string;
}