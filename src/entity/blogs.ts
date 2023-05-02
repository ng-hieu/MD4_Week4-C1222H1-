import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Users} from "./users";
@Entity()
export class Blogs {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "varchar"})
    titleBlog: string;
    @Column({type: "varchar"})
    textBlog: string
    @ManyToOne(() => Users, (user) => user.blog)
    user: number;
    @Column({type: "varchar"})
    image: string;
}