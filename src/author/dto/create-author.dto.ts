import { Type } from "class-transformer";
import { IsObject, IsOptional, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";
import { CreateMusicDto } from "src/music/dto/create-music.dto";

export class CreateAuthorDto {
    @MaxLength(100)
    @MinLength(2)
    @IsString()
    firstName: string;

    @MaxLength(100)
    @MinLength(2)
    @IsString()
    lastName: string;

    @IsOptional()
    @IsObject()
    @ValidateNested()
    @Type(() => CreateMusicDto)
    musics: CreateMusicDto[];
    
    @IsString()
    biographi: string;
}
