class HomeController {
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async index(req, res) {
    return res.render("index", {
      name: 'Valente'
    });
  }
}

export default new HomeController();