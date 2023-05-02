import { Blogs } from "./blogs";
import { Musics } from "./music";
export declare class Users {
    id: number;
    nameUser: string;
    password: string;
    ageUser: number;
    blog: Blogs[];
    music: Musics[];
    image: string;
}
