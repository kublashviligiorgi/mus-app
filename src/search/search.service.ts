import { Injectable } from '@nestjs/common';
import { CreateSearchDto } from './dto/create-search.dto';
import { UpdateSearchDto } from './dto/update-search.dto';
import { AuthorRepository } from 'src/author/author.repository';
import { AlbumRepository } from 'src/album/album.repository';
import { MusicRepository } from 'src/music/music.repository';

@Injectable()
export class SearchService {
  constructor(
    private readonly authorRepository: AuthorRepository,
    private readonly albumRepository: AlbumRepository,
    private readonly musicRepository: MusicRepository
  ) { }
  async findAll(data: CreateSearchDto) {
    const author = this.authorRepository.search(data.query)
    const album = this.albumRepository.search(data.query)
    const music = this.musicRepository.search(data.query)

    return { author, album, music }
  }

}
