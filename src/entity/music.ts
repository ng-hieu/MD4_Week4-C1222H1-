import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Users} from "./users";
@Entity()
export class Musics {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "varchar"})
    titleMusic: string;
    @Column({type: "varchar"})
    textMusic: string
    @ManyToOne(() => Users, (user) => user.music)
    user: Users;
    @Column({type: "varchar"})
    image: string;
}
