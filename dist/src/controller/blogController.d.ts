import { Request, Response } from 'express';
declare class BlogController {
    private blogService;
    constructor();
    checkTemplate: (req: Request, res: Response) => Promise<void>;
    showAll: (req: Request, res: Response) => Promise<void>;
    addNewBlog: (req: Request, res: Response) => Promise<void>;
    bfEditBlog: (req: Request, res: Response) => Promise<void>;
    afEditBlog: (req: Request, res: Response) => Promise<void>;
    deleteBlog: (req: Request, res: Response) => Promise<void>;
    searchBlog: (req: Request, res: Response) => Promise<void>;
}
declare const _default: BlogController;
export default _default;
