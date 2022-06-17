import { Router } from "express";
import CoisaController from "../../app/http/controllers/CoisaController";
import HomeController from "../../app/http/controllers/HomeController";
import MessageController from "../../app/http/controllers/MessageController";



const routes = Router();

routes.get("/", HomeController.index);
routes.get('/coisas', CoisaController.index);
routes.get('/messages', MessageController.index);




export default routes;