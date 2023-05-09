import User from "../models/user.js";
import bcryptjs from "bcryptjs";
import { validationResult } from "express-validator";

export const getUsers = (req, res) => {
  const queryParams = req.query;
  res.status(200).json({
    msg: "Get API Controller",
    queryParams,
  });
};

export const putUsers = (req, res) => {
  const { id } = req.params;
  res.status(203).json({
    msg: "Put API Controller",
    id,
  });
};

export const postUsers = async (req, res) => {
  const { name, email, password, role } = req.body;
  const user = new User({ name, email, password, role });

  // Validate if email exists
  const emailExists = await User.findOne({ email });
  if (emailExists) {
    return res.status(400).json({
      msg: "Email already exists",
    });
  }
  // Encrypt password
  const salt = bcryptjs.genSaltSync(10);
  user.password = bcryptjs.hashSync(password, salt);

  await user.save();
  res.status(202).json({
    msg: "Post API Controller",
    user,
  });
};

export const deleteUsers = (req, res) => {
  res.status(202).json({
    msg: "Delete API Controller",
  });
};

export const patchUsers = (req, res) => {
  res.status(201).json({
    msg: "Patch API Controller",
  });
};
