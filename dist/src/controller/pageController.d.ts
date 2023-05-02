import { Request, Response } from 'express';
declare class PageController {
    pageAddBlog: (req: Request, res: Response) => Promise<void>;
    signIn: (req: Request, res: Response) => void;
    register: (req: Request, res: Response) => void;
    signOut: (req: Request, res: Response) => void;
    pageAddMusic: (req: Request, res: Response) => Promise<void>;
}
declare const _default: PageController;
export default _default;
