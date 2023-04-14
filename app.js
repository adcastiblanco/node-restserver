import express from "express";
import { config } from "dotenv";
config();
const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hola");
});

app.listen(port, () => console.log(`App listen in ${port}`));
