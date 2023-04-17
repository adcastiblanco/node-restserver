import { Router } from "express";
import {
  deleteUsers,
  getUsers,
  patchUsers,
  postUsers,
  putUsers,
} from "../controllers/users.js";

const routes = Router();

routes.get("", getUsers);

routes.put("/:id", putUsers);

routes.post("", postUsers);

routes.delete("", deleteUsers);

routes.patch("", patchUsers);

export default routes;
