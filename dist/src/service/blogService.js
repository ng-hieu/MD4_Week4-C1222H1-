"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blogs_1 = require("../entity/blogs");
const data_source_1 = require("../data-source");
class BlogService {
    constructor() {
        this.findAll = async () => {
            let listBlog = await this.blogRepository.find({
                relations: {
                    user: true
                }
            });
            return listBlog;
        };
        this.findBlogByUser = async (id) => {
            return await this.blogRepository.find({
                relations: {
                    user: true,
                },
                where: { id: id }
            });
        };
        this.addBlog = async (blog) => {
            await this.blogRepository.save(blog);
        };
        this.showBlogEdit = async (id) => {
            let blog = await this.blogRepository.find({
                where: {
                    id: id
                }
            });
            return blog[0];
        };
        this.editBlog = async (id, blog) => {
            await this.blogRepository.update({
                id: id
            }, {
                titleBlog: `${blog.titleBlog}`,
                textBlog: `${blog.textBlog}`,
                image: `${blog.image}`
            });
        };
        this.deleteById = async (id) => {
            await this.blogRepository.delete({
                id: id
            });
        };
        this.blogRepository = data_source_1.AppDataSource.getRepository(blogs_1.Blogs);
    }
}
exports.default = new BlogService();
//# sourceMappingURL=blogService.js.map