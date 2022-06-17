import { Request, Response } from "express";

class CoisaController {

  async index(req: Request, res: Response) {
    return res.render("coisa", {
      name: 'Mizerável',
      pica: 'Tamanho da de Ednaldo'
    });
  }
}

export default new CoisaController();