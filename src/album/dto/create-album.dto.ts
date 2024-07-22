import { Type } from "class-transformer";
import { IsArray, IsNumber, IsObject, IsString, ValidateNested } from "class-validator"
import { CreateMusicDto } from "src/music/dto/create-music.dto";

export class CreateAlbumDto {
    @IsString()
    title: string;

    @IsString()
    releaseDate: string;

    @IsObject()
    @ValidateNested()
    @Type(() => CreateMusicDto)
    musics: CreateMusicDto[];

    @IsNumber()
    artistId: number
}
