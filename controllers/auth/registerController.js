const { registerService } = require("../../servises/auth");
const { Users } = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
const gravatar = require("gravatar");

const registerController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const isAlreadyRegistred = await Users.findOne({ email });
  if (isAlreadyRegistred) {
    res.status(400);
    throw new Error("Email in use");
  }
  const avatarURL = gravatar.url(email);
  await registerService(email, password, avatarURL);
  res.status(201).json({
    user: {
      email: email,
      subscription: "starter",
    },
  });
});

module.exports = registerController;
