import { Router } from "express";
import HomeController from "../../app/http/controllers/HomeController";

const routes = Router();

routes.get("/", HomeController.index);

export default routes;