const { Users } = require("../../models/userModel");
const bcrypt = require("bcryptjs");

const reristerServise = async (email, password) => {
  const hashPassword = bcrypt.hashSync(password, 10);
  const newUser = await Users.create({
    email,
    password: hashPassword,
  });
  if (!newUser) {
    res.status(400);
    throw new Error("Cannot save user!");
  }
};

module.exports = reristerServise;
