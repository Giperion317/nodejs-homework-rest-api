const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const auth = (req, res, next) => {
  try {
    const [tokenType, token] = req.headers.authorization.split(" ");
    if (token && tokenType === "Bearer") {
      const decodedData = jwt.verify(token, SECRET);
      req.user = decodedData;
      next();
    }
  } catch (error) {
    res
      .status(401)
      .json({ code: 401, message: "Not authorized!", error: error.message });
  }
};

module.exports = auth;
