import {Request, Response} from 'express';
import MusicService from "../service/musicService";
import session from "express-session"

class MusicController{
    private musicService
    constructor() {
        this.musicService = MusicService
    }
    showMusic = async (req: Request, res: Response) => {
        let checkSignIn = false;
        if (req.session['user']) {
            checkSignIn = true;
        }
        let listMusic = await this.musicService.findAllMusic();
        res.render('music', {inforMusic: listMusic, check: checkSignIn})
    }
    addNewMusic = async (req: Request, res: Response) => {
        let idUser = req.session['user']._id;
        req.body.user = idUser;
        this.musicService.addMusic(req.body);
        res.redirect(301, '/home_af')
    }
    searchMusic = async (req: Request, res: Response) => {
       res.send('Em moi demo thoi')
    }
}
export default new MusicController();