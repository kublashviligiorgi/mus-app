import { IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateMusicDto {
    
    @MaxLength(100)
    @MinLength(3)
    @IsString()
    name: string

    @IsNumber()
    authorId: number

    @IsNumber()
    duration: number
}
