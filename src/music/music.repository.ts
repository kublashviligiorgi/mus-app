import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Music } from "./entities/music.entity";
import { Repository } from "typeorm";
import { CreateMusicDto } from "./dto/create-music.dto";
import { UpdateMusicDto } from "./dto/update-music.dto";

@Injectable()
export class MusicRepository {
    constructor(
        @InjectRepository(Music)
        private muscReposiotry: Repository<Music>
    ) { }

    create(data: CreateMusicDto) {
        // const newMusic = new Music()
        // newMusic.na
    }

    findAll() {
        return this.muscReposiotry.find()
    }

    fondOne(id: number) {
        return this.muscReposiotry.findOneBy({ id })
    }

    update(id: number, data:UpdateMusicDto) {

    }

    remove(id: number) {

    }



}