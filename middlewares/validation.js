const Joi = require("joi");

const contactValidate = (req, res, next) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ message: "missing required name field" });
  }

  const validateShema = Joi.object({
    name: Joi.string().min(2).max(20).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
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
module.exports = {
  contactValidate,
};
