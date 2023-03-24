const { subscriptionService } = require("../../servises/auth");
const asyncHandler = require("express-async-handler");

const subscriptionController = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const { subscription } = req.body;
  const data = await subscriptionService(id, subscription);
  res.status(200).json({
    status: "success",
    data: { email: data.email, subscription: data.subscription },
  });
});

module.exports = subscriptionController;
