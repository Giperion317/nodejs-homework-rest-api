const { Users } = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
const { sendEmail } = require("../../helpers");
require("dotenv").config();

const { BASE_URL } = process.env;

const resendEmailController = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await Users.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (user.verify) {
    res.status(400);
    throw new Error("Verification has already been passed");
  }

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target='_blannk' href='${BASE_URL}/api/users/verify/${user.verificationToken}'>Click to verrify you email</a>`,
  };

  await sendEmail(verifyEmail);

  res.status(200).json({
    status: "Verification email sent",
  });
});

module.exports = resendEmailController;
