import { Router } from "express";
import {
  deleteUsers,
  getUsers,
  patchUsers,
  postUsers,
  putUsers,
} from "../controllers/users.js";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields.js";

const routes = Router();

routes.get("", getUsers);

routes.put("/:id", putUsers);

routes.post(
  "",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password debe tener más de 6 caracteres").isLength({
      min: 6,
    }),
    check("role", "No es un rol valido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    check("email", "El email es incorrecto").isEmail(),
    validateFields,
  ],
  postUsers
);

routes.delete("", deleteUsers);

routes.patch("", patchUsers);

export default routes;
