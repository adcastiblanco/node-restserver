import express from "express";

export class Server {
  constructor() {
    this.app = express();

    this.port = process.env.PORT;

    this.middlewares();
    this.createRoutes();
  }

  middlewares() {
    this.app.use(express.static("public"));
  }

  createRoutes() {
    this.app.get("/api", (req, res) => {
      res.status(200).json({
        msg: "Get API",
      });
    });

    this.app.put("/api", (req, res) => {
      res.status(203).json({
        msg: "Put API",
      });
    });

    this.app.post("/api", (req, res) => {
      res.status(202).json({
        msg: "Post API",
      });
    });

    this.app.delete("/api", (req, res) => {
      res.status(202).json({
        msg: "Delete API",
      });
    });

    this.app.patch("/api", (req, res) => {
      res.status(201).json({
        msg: "Patch API",
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => console.log(`App listen in ${this.port}`));
  }
}
