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

export const postUsers = (req, res) => {
  const { name, age } = req.body;
  res.status(202).json({
    msg: "Post API Controller",
    name,
    age,
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
