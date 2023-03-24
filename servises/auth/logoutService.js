const { Users } = require("../../models/userModel");

const logoutServise = async (id) => {
  const user = await Users.findById(id);
  if (!user) {
    res.status(400);
    throw new Error("Cannot find user!");
  }
  return user;
};

module.exports = logoutServise;
