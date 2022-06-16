import express from "express";
import http from "http";
import livereload from "livereload";
import DiscordExceptionHandler from "../../app/exception/DiscordExceptionHandler";
import routes from "../routes";
import io from "socket.io";
import { engine } from "express-handlebars";
import path from "path";
import cookieParser from "cookie-parser";
import connectLiveReload from "connect-livereload";

class App {
  viewsPath = path.join(__dirname, "..", "..", "resources", "views");
  publicPath = path.join(__dirname, "..", "..", "public");

  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.livereload();
    this.middleweres();
    this.routes();
    this.socket();
    this.exceptionHandler();
  }

  middleweres() {
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

  livereload() {
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

  exceptionHandler() {
    this.app.use((err, req, res, next) => {
      DiscordExceptionHandler.capture(req.url, err);
      next();
    });
  }

  socket() {
    this.socket = io(this.server, {
      cors: {
        methods: ["GET", "POST"],
        credentials: true,
      },
    });
  }
}

export default new App().server;
