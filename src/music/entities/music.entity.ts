import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Music {
    @PrimaryGeneratedColumn()
    id: number
}
