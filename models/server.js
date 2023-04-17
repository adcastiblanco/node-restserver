import express from "express";
import cors from "cors";
import userRoutes from "../routes/users.js";
export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.usersPath = "/api/users";

    this.middlewares();
    this.createRoutes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  createRoutes() {
    this.app.use(this.usersPath, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => console.log(`App listen in ${this.port}`));
  }
}
