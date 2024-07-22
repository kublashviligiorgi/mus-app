import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MusicEntity } from "./entities/music.entity";
import { Repository } from "typeorm";
import { CreateMusicDto } from "./dto/create-music.dto";
import { UpdateMusicDto } from "./dto/update-music.dto";

@Injectable()
export class MusicRepository {
    constructor(
        @InjectRepository(MusicEntity)
        private muscReposiotry: Repository<MusicEntity>
    ) { }

    create(data: CreateMusicDto) {
        const newMusic = new MusicEntity()
        newMusic.name = data.name
        newMusic.authorId = data.authorId
        newMusic.duration = data.duration

        return this.muscReposiotry.save(newMusic)
    }

    findAll() {
        return this.muscReposiotry.find()
    }

    fondOne(id: number) {
        return this.muscReposiotry
            .createQueryBuilder('music')
            .where('music.id = :id', { id })
            .getOne()
    }

    update(id: number, data: UpdateMusicDto) {
        const updatedMusic = new MusicEntity()
        updatedMusic.id = id
        updatedMusic.name = data.name
        updatedMusic.duration = data.duration
        updatedMusic.authorId = data.authorId

        return this.muscReposiotry.update(id, updatedMusic)
    }

    remove(id: number) {
        return this.muscReposiotry.softDelete(id)
    }



}