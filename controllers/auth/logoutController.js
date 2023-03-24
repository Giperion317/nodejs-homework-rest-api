const { logoutServise } = require("../../servises/auth");
const asyncHandler = require("express-async-handler");

const logoutController = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const user = await logoutServise(id);

  user.token = null;

  const updatedUser = await user.save();

  if (!updatedUser) {
    res.status(400);
    throw new Error("Cannot logout user!");
  }

  res.status(204).json({ message: "Logout success" });
});

module.exports = logoutController;
