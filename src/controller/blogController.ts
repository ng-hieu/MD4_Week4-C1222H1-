import {Request, Response} from 'express';
import BlogService from '../service/blogService'
import session from "express-session"
import userService from "../service/userService";

class BlogController {
    private blogService

    constructor() {
        this.blogService = BlogService;
    }

    checkTemplate = async (req: Request, res: Response) => {
        let listBlogService = await this.blogService.findAll();
        res.status(200).json(listBlogService)
        // res.render('index', {listBlog: listBlogService})
    }
    //trong phan /home
    showAll = async (req: Request, res: Response) => {
        // if (req.session['user']) {
            let listBlogService = await this.blogService.findAll()
        //     res.render('afSignIn/homeAfSignIn', {listBlog: listBlogService});
        // } else {
        //     res.redirect(301, '/sign_in')
        // }
    }
    addNewBlog = async (req: Request, res: Response) => {
        // let idUser = req.session['user'].id
        // let user = await userService.findUser(req.body.user);
        // req.body.user = user;
        // console.log(req.body)
        await this.blogService.addBlog(req.body);
        res.status(201).json({
           message: 'OK'
        })
        // res.redirect(301, '/home_af')
    }
    bfEditBlog = async (req: Request, res: Response) => {
        let id = req.params.id;
        let blog = await this.blogService.showBlogEdit(id);
        res.status(200).json(blog)
        // res.render('afSignIn/editBlog', {blog: blogNeedEdit})
    }
    afEditBlog = async (req: Request, res: Response) =>{
        let id = req.params.id;
        let blog = req.body;
        await this.blogService.editBlog(id, blog);
        res.status(201).json({
            message: 'Edit Success'
        })
    }
    deleteBlog = async (req: Request, res: Response) =>{
        let id = parseInt(req.params.id);
        // console.log('checkkk')
        // console.log(id)
        await this.blogService.deleteById(id);
        res.status(201).json({
            message: 'Delete Success'
        })
        // res.redirect(301, '/information');
    }
    searchBlog = async (req: Request, res: Response) =>{
        let checkSignIn:boolean = false;
        if (req.session['user']) {
            checkSignIn = true;
        }
        let letter = await req.query.searchBlog;
        let print = await this.blogService.searchBlogs(letter);
        console.log(letter)
        // res.render('afSignIn/searchProduct', {listBlog: print, check: checkSignIn});
    }
}

export default new BlogController();