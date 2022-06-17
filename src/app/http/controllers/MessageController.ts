import { Request, Response } from 'express';

class MessageController {
    public async index(req: Request, res: Response) {
        return res.send('Puca');
    }
}

export default new MessageController();