import { Request, Response, NextFunction } from 'express';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
/** Main Enpoint */
const mainEndpoint = async (_req: Request, res: Response, _next: NextFunction) => {
    return res.status(200).json({
        message: 'Welcome to the main endpoint'
    });
};

export default { mainEndpoint };