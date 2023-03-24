const { loginService } = require("../../servises/auth");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../../helpers");

const loginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await loginService(email, password);
  const token = generateToken({
    id: user._id,
    email: user.email,
  });

  user.token = token;

  const userWithToken = await user.save();

  if (!userWithToken) {
    res.status(400);
    throw new Error("Cannot save token!");
  }

  res.status(200).json({
    token: user.token,
    user: {
      email: user.email,
      subscription: "starter",
    },
  });
});

module.exports = loginController;
