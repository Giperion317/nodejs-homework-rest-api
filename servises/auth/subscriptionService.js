const { Users } = require("../../models/userModel");

const subscriptionService = async (userId, subscription) => {
  const data = await Users.findByIdAndUpdate(
    { _id: userId },
    { subscription },
    {
      new: true,
    }
  );
  return data;
};

module.exports = subscriptionService;
