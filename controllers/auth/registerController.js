const { registerService } = require("../../servises/auth");
const { Users } = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
const gravatar = require("gravatar");
const { sendEmail } = require("../../helpers");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const { BASE_URL } = process.env;

const registerController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const isAlreadyRegistred = await Users.findOne({ email });
  if (isAlreadyRegistred) {
    res.status(400);
    throw new Error("Email in use");
  }
  const avatarURL = gravatar.url(email);

  const verificationToken = uuidv4();

  await registerService(email, password, avatarURL, verificationToken);

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target='_blannk' href='${BASE_URL}/api/users/verify/${verificationToken}'>Click to verrify you email</a>`,
  };
  await sendEmail(verifyEmail);

  res.status(201).json({
    user: {
      email: email,
      subscription: "starter",
    },
  });
});

module.exports = registerController;
