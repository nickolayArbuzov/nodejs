export class CreateVideoDto {
    readonly title: string;
    readonly author: string;
    readonly canBeDownloaded: boolean;
    readonly minAgeRestriction: number | null;
    readonly availableResolutions: string[];
}

export class UpdateVideoDto {
    readonly title: string;
    readonly author: string;
    readonly canBeDownloaded: boolean;
    readonly minAgeRestriction: number | null;
    readonly availableResolutions: string[];
    readonly publicationDate: string;
}