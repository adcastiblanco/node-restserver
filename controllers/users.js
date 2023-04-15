export const getUsers = (req, res) => {
  res.status(200).json({
    msg: "Get API Controller",
  });
};

export const putUsers = (req, res) => {
  res.status(203).json({
    msg: "Put API Controller",
  });
};

export const postUsers = (req, res) => {
  res.status(202).json({
    msg: "Post API Controller",
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
