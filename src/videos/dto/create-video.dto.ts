export class CreateVideoDto {
    readonly title: string;
    readonly author: string;
    readonly canBeDownloaded: boolean;
    readonly minAgeRestriction: number | null;
    readonly createdAt: Date;
    readonly publicationDate: string;
    readonly availableResolutions: string[];
}