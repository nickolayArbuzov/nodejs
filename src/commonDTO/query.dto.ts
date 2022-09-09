import { Transform, TransformFnParams } from "class-transformer";
import { IsString, Length } from "class-validator";

export class QueryDto {
    readonly pageNumber: string;
    readonly pageSize: string;
    readonly sortBy: string;
    readonly sortDirection: string;
}