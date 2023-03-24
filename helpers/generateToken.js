const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

function generateToken(data) {
  return jwt.sign(data, SECRET, { expiresIn: "8h" });
}

module.exports = generateToken;
