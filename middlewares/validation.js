const Joi = require("joi");

const contactValidate = (req, res, next) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ message: "Provide all required fields!" });
  }

  const validateShema = Joi.object({
    name: Joi.string().min(2).max(20).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(4).max(13).required(),
  });
  const validateResult = validateShema.validate(req.body);

  if (validateResult.error) {
    return res
      .status(400)
      .json({ message: validateResult.error.details[0].message });
  }
  next();
};

const statusContactValidate = (req, res, next) => {
  const statusContactSchema = Joi.object({
    favorite: Joi.boolean().required(),
  });
  const validateResult = statusContactSchema.validate(req.body);
  if (validateResult.error) {
    return res.status(400).json({ message: "Missing field favorite!" });
  }
  next();
};

const authValidate = (req, res, next) => {
  const { password, email } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Provide all required fields!");
  }
  const validateShema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
    token: Joi.string(),
  });
  const validateResult = validateShema.validate(req.body);

  if (validateResult.error) {
    return res
      .status(400)
      .json({ message: validateResult.error.details[0].message });
  }
  next();
};

module.exports = {
  contactValidate,
  statusContactValidate,
  authValidate,
};
