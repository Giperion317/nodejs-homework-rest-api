const { Users } = require("../../models/userModel");
const bcrypt = require("bcryptjs");

const loginServise = async (email, password) => {
  if (!email || !password) {
    res.status(400);
    throw new Error("Provide all required fields!");
  }
  const user = await Users.findOne({ email });
  const isValidPassword = bcrypt.compareSync(password, user?.password || "");

  if (!user || !isValidPassword) {
    res.status(400);
    throw new Error("Invalid login or password!");
  }

  return user;
};

module.exports = loginServise;
