import {
    IsString,
    IsNumber,
    Max,
    Min,
    IsOptional,
    MinLength,
    IsBoolean,
    IsObject
} from "class-validator"

export class UpdateGroupDto {
    @IsOptional()
    @IsString()
    @MinLength(10)
    readonly description?: string

    @IsOptional()
    @IsNumber()
    @Min(16)
    @Max(32)
    readonly treeDepth?: number

    @IsOptional()
    @IsBoolean()
    readonly apiEnabled?: boolean

    @IsOptional()
    @IsNumber()
    readonly fingerprintDuration?: number

    @IsOptional()
    @IsObject()
    readonly reputationCriteria?: object
}
