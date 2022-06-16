import { Request, Response } from 'express';

class HomeController {
  

  async index (req: Request, res: Response) {
    return res.render("index", {
      name: 'Mizerável'
    });
  }
}

export default new HomeController();