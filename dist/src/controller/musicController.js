"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const musicService_1 = __importDefault(require("../service/musicService"));
class MusicController {
    constructor() {
        this.showMusic = async (req, res) => {
            let checkSignIn = false;
            if (req.session['user']) {
                checkSignIn = true;
            }
            let listMusic = await this.musicService.findAllMusic();
            res.render('music', { inforMusic: listMusic, check: checkSignIn });
        };
        this.addNewMusic = async (req, res) => {
            let idUser = req.session['user']._id;
            req.body.user = idUser;
            this.musicService.addMusic(req.body);
            res.redirect(301, '/home_af');
        };
        this.searchMusic = async (req, res) => {
            res.send('Em moi demo thoi');
        };
        this.musicService = musicService_1.default;
    }
}
exports.default = new MusicController();
//# sourceMappingURL=musicController.js.map