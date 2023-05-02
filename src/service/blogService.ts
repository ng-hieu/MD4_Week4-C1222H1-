import {Blogs} from "../entity/blogs";
import {AppDataSource} from "../data-source";
import {Musics} from "../entity/music";

class BlogService {
    private blogRepository

    constructor() {
        this.blogRepository = AppDataSource.getRepository(Blogs)
    }

    findAll = async () => {
        let listBlog = await this.blogRepository.find({
            relations: {
                user: true
            }
        });
        return listBlog;
    }
    findBlogByUser = async (id) => {
        return await this.blogRepository.find({
            relations: {
                user: true,
            },
            where: {id: id}
        })
    }
    addBlog = async (blog) => {
        await this.blogRepository.save(blog);
    }
    showBlogEdit = async (id) => {
        let blog = await this.blogRepository.find({
            where: {
                id: id
            }
        });
        return blog[0];
    }
    editBlog = async (id, blog) => {
        await this.blogRepository.update({
                    id: id
            },
            {
                titleBlog: `${blog.titleBlog}`,
                textBlog: `${blog.textBlog}`,
                image: `${blog.image}`
            })
    }
    deleteById = async (id) => {
        await this.blogRepository.delete({
            id: id
        });
    }
    // searchBlogs = async (letter) => {
    //    return await Blogs.find({$or:[{textBlog: {$regex: letter, $options: 'i'}}, {titleBlog: {$regex: letter, $options: 'i'}}]}).populate('user')
    // }
}

export default new BlogService()