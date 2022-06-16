import { Router } from "express";
import CoisaController from "../../app/http/controllers/CoisaController";
import HomeController from "../../app/http/controllers/HomeController";


const routes = Router();

routes.get("/", HomeController.index);
routes.get('/coisas', CoisaController.index);




export default routes;