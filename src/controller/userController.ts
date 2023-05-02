import {Request, Response} from 'express';
import UserService from "../service/userService";
import session from 'express-session';
import BlogService from "../service/blogService";
import {Users} from "../entity/users";

class UserController {
    private userService;
    private blogService;
    constructor() {
        this.userService = UserService;
        this.blogService = BlogService;
    }
    pageInfor = async (req: Request, res: Response) => {
            let id = await req.session['user']['_id'];
            let inforUser = await this.userService.findUser(id)
            let blogUser = await this.blogService.findBlogByUser(id)
            res.status(200).json(inforUser)
    }
    registerUser = async (req:Request, res:Response) => {
        let user = req.body
        this.userService.register(user);
        res.redirect(301, '/sign_in')
    }
    signIn = async (req:Request, res:Response) => {
        let user = await this.userService.checkUser(req.body);
        console.log(user, user instanceof  Users)
        if(!user){
            res.redirect(301, '/sign_in')
        } else {
            req.session['user'] = user;
            res.redirect(301, '/home_af')
        }
    }
    bfChangeInfor = async (req: Request, res: Response) => {
        let id = req.params.id;
        let userNeedEdit = await this.userService.showUserEdit(id);
        res.render('afSignIn/changeInfor', {user: userNeedEdit})
    }
    afChangeInfor = async (req: Request, res: Response) =>{
        let id = req.params.id;
        let user = req.body;
        console.log(id)
        console.log(user)
        await this.userService.editUser(id, user);
        res.redirect(301, '/information')
    }
}
export default new UserController();