import { Request, Response } from 'express';
declare class UserController {
    private userService;
    private blogService;
    constructor();
    pageInfor: (req: Request, res: Response) => Promise<void>;
    registerUser: (req: Request, res: Response) => Promise<void>;
    signIn: (req: Request, res: Response) => Promise<void>;
    bfChangeInfor: (req: Request, res: Response) => Promise<void>;
    afChangeInfor: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserController;
export default _default;
