declare class BlogService {
    private blogRepository;
    constructor();
    findAll: () => Promise<any>;
    findBlogByUser: (id: any) => Promise<any>;
    addBlog: (blog: any) => Promise<void>;
    showBlogEdit: (id: any) => Promise<any>;
    editBlog: (id: any, blog: any) => Promise<void>;
    deleteById: (id: any) => Promise<void>;
}
declare const _default: BlogService;
export default _default;
