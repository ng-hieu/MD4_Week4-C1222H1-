"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blogService_1 = __importDefault(require("../service/blogService"));
class BlogController {
    constructor() {
        this.checkTemplate = async (req, res) => {
            let listBlogService = await this.blogService.findAll();
            res.status(200).json(listBlogService);
        };
        this.showAll = async (req, res) => {
            let listBlogService = await this.blogService.findAll();
        };
        this.addNewBlog = async (req, res) => {
            await this.blogService.addBlog(req.body);
            res.status(201).json({
                message: 'OK'
            });
        };
        this.bfEditBlog = async (req, res) => {
            let id = req.params.id;
            let blog = await this.blogService.showBlogEdit(id);
            res.status(200).json(blog);
        };
        this.afEditBlog = async (req, res) => {
            let id = req.params.id;
            let blog = req.body;
            await this.blogService.editBlog(id, blog);
            res.status(201).json({
                message: 'Edit Success'
            });
        };
        this.deleteBlog = async (req, res) => {
            let id = parseInt(req.params.id);
            await this.blogService.deleteById(id);
            res.status(201).json({
                message: 'Delete Success'
            });
        };
        this.searchBlog = async (req, res) => {
            let checkSignIn = false;
            if (req.session['user']) {
                checkSignIn = true;
            }
            let letter = await req.query.searchBlog;
            let print = await this.blogService.searchBlogs(letter);
            console.log(letter);
        };
        this.blogService = blogService_1.default;
    }
}
exports.default = new BlogController();
//# sourceMappingURL=blogController.js.map