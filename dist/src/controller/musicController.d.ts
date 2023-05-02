import { Request, Response } from 'express';
declare class MusicController {
    private musicService;
    constructor();
    showMusic: (req: Request, res: Response) => Promise<void>;
    addNewMusic: (req: Request, res: Response) => Promise<void>;
    searchMusic: (req: Request, res: Response) => Promise<void>;
}
declare const _default: MusicController;
export default _default;
