const { Users } = require("../../models/userModel");
const asyncHandler = require("express-async-handler");

const verifyController = asyncHandler(async (req, res) => {
  const { verificationToken } = req.params;
  const user = await Users.findOne({ verificationToken });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  await Users.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: "",
  });

  res.status(200).json({
    status: "Verification successful",
  });
});

module.exports = verifyController;
