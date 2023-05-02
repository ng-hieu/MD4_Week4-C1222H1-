"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
const blogService_1 = __importDefault(require("../service/blogService"));
const users_1 = require("../entity/users");
class UserController {
    constructor() {
        this.pageInfor = async (req, res) => {
            let id = await req.session['user']['_id'];
            let inforUser = await this.userService.findUser(id);
            let blogUser = await this.blogService.findBlogByUser(id);
            res.status(200).json(inforUser);
        };
        this.registerUser = async (req, res) => {
            let user = req.body;
            this.userService.register(user);
            res.redirect(301, '/sign_in');
        };
        this.signIn = async (req, res) => {
            let user = await this.userService.checkUser(req.body);
            console.log(user, user instanceof users_1.Users);
            if (!user) {
                res.redirect(301, '/sign_in');
            }
            else {
                req.session['user'] = user;
                res.redirect(301, '/home_af');
            }
        };
        this.bfChangeInfor = async (req, res) => {
            let id = req.params.id;
            let userNeedEdit = await this.userService.showUserEdit(id);
            res.render('afSignIn/changeInfor', { user: userNeedEdit });
        };
        this.afChangeInfor = async (req, res) => {
            let id = req.params.id;
            let user = req.body;
            console.log(id);
            console.log(user);
            await this.userService.editUser(id, user);
            res.redirect(301, '/information');
        };
        this.userService = userService_1.default;
        this.blogService = blogService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map