import User from "../models/user.js";

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
  const body = req.body;
  const user = new User(body);
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
