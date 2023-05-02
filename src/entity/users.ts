import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Blogs} from "./blogs";
import {Musics} from "./music";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "varchar"})
    nameUser: string;
    @Column({type: "varchar"})
    password: string;
    @Column()
    ageUser: number
    @OneToMany(()=>Blogs, (blog)=>blog.user)
    blog: Blogs[]
    @OneToMany(()=>Musics, (music)=>music.user)
    music: Musics[]
    @Column({type: "varchar"})
    image: string;
}