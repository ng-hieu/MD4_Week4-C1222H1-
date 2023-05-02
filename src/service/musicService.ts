import {Musics} from "../entity/music";
import {AppDataSource} from "../data-source";
import {Users} from "../entity/users";
class MusicService {
    private musicRepository
    constructor() {
        this.musicRepository = AppDataSource.getRepository(Musics)
    }
    findAllMusic = async () => {
        let listMusic = await this.musicRepository.find()
        console.log(listMusic)
        return listMusic;
    }
    // addMusic = async (music) => {
    //     await Musics.create(music);
    // }
}
export default new MusicService();