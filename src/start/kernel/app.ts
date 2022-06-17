import express, { Request, Response, NextFunction } from "express";
import http from "http";
import livereload from "livereload";
import DiscordExceptionHandler from "../../app/exception/DiscordExceptionHandler";
import routes from "../routes";
import * as socketIo from "socket.io";
import { engine } from "express-handlebars";
import path from "path";
import cookieParser from "cookie-parser";
import connectLiveReload from "connect-livereload";


class App {
  public viewsPath = path.join(__dirname, "..", "..", "resources", "views");
  public publicPath = path.join(__dirname, "..", "..", "public");
  public app;
  public server;
  public io!: socketIo.Server;

  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.livereload();
    this.middlewares();
    this.routes();
    this.webSockets();
    this.exceptionHandler();
  }

  public middlewares() {
    this.app.use(connectLiveReload());
    this.app.engine("hbs", engine({ extname: ".hbs" }));
    this.app.set("views", this.viewsPath);
    this.app.set("view engine", "hbs");
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
    this.app.use(
      "/public",
      express.static(this.publicPath)
    );
  }

  public livereload() {
    const liveReloadServer = livereload.createServer();
    liveReloadServer.server.once("connection", () => {
      setTimeout(() => {
        liveReloadServer.refresh("/");
      }, 100);
    });
  }

  routes() {
    this.app.use("/", routes);
  }

  public exceptionHandler() {
    this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      DiscordExceptionHandler.capture(req.url, err);
      next();
    });
  }

  public webSockets() {
    this.io = new socketIo.Server(this.server, {
      cors: {
        methods: ["GET", "POST"],
        credentials: true,
      },
    });
  }
}

export default new App();
