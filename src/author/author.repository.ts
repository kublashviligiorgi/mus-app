import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthorEntity } from "./entities/author.entity";
import { Repository } from "typeorm";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";

@Injectable()
export class AuthorRepository {
    constructor(
        @InjectRepository(AuthorEntity)
        private authorRepository: Repository<AuthorEntity>
    ) { }

    create(data: CreateAuthorDto) {
        const newAuthor = new AuthorEntity()

        newAuthor.firstName = data.firstName;
        newAuthor.lastName = data.lastName;
        newAuthor.biographi = data.biographi

        return this.authorRepository.save(newAuthor)
    }

    findAll() {
        return this.authorRepository.find()
    }

    findOne(id: number) {
        return this.authorRepository
            .createQueryBuilder('author')
            .where('author.id = :id', { id })
            .getOne()
    }

    update(id: number, data: UpdateAuthorDto) {
        const updatedAuthor = new AuthorEntity()
        updatedAuthor.id = id;
        updatedAuthor.firstName = data.firstName;
        updatedAuthor.lastName = data.lastName;
        updatedAuthor.biographi = data.biographi;

        return this.authorRepository.update(id, updatedAuthor)
    }

    remove(id: number) {
        return this.authorRepository.softDelete({ id })
    }
}