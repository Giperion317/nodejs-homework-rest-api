const asyncHandler = require("express-async-handler");

const currentUserControler = asyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(401);
    throw new Error("Not athorized");
  }
  const { email, subscription } = req.user;

  res.status(200).json({
    email: email,
    subscription: subscription,
  });
});

module.exports = currentUserControler;
