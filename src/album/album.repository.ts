import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AlbumEntity } from "./entities/album.entity";
import { Repository } from "typeorm";
import { CreateAlbumDto } from "./dto/create-album.dto";
import { UpdateAlbumDto } from "./dto/update-album.dto";

@Injectable()
export class AlbumRepository {
    constructor(@InjectRepository(AlbumEntity)
    private albumRepository: Repository<AlbumEntity>) { }

    create(data: CreateAlbumDto) {
        const newAlbum = new AlbumEntity()
        newAlbum.title = data.title;
        newAlbum.releaseDate = data.releaseDate;
        newAlbum.authorId = data.authorId;
        return this.albumRepository.save(newAlbum)
    }

    findAll() {
        return this.albumRepository.find()
    }

    findOne(id: number) {
        return this.albumRepository
            .createQueryBuilder('album')
            .where('album.id=:id', { id })
            .getOne()
    }
    update(id: number, updateAlbumDto: UpdateAlbumDto) {
        const updatedAlbum = new AlbumEntity();
        updatedAlbum.title = updateAlbumDto.title;
        updatedAlbum.releaseDate = updateAlbumDto.releaseDate;
        updatedAlbum.authorId = updateAlbumDto.authorId
        this.albumRepository.update(id, updatedAlbum)
        return this.albumRepository
            .createQueryBuilder('album')
            .where('album.id=:id', { id })
            .getOne()

    }

    remove(id: number) {
        this.albumRepository.softDelete(id)
        return this.albumRepository.findOneBy({ id })
    }

    async search(query: string) {
        return await this.albumRepository
            .createQueryBuilder('album')
            .where('album.title LIKE :query', { query: `%${query}%` })
            .getMany()
    }
}