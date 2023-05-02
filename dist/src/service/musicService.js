"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const music_1 = require("../entity/music");
const data_source_1 = require("../data-source");
class MusicService {
    constructor() {
        this.findAllMusic = async () => {
            let listMusic = await this.musicRepository.find();
            console.log(listMusic);
            return listMusic;
        };
        this.musicRepository = data_source_1.AppDataSource.getRepository(music_1.Musics);
    }
}
exports.default = new MusicService();
//# sourceMappingURL=musicService.js.map