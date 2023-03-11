const Joi = require("joi");

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  const { error } = schema.validate({ email, password });

  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};

const validateProductsFields = (req, res, next) => {
  const { name, price, description } = req.body;

  const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
  });

  const { error } = schema.validate({ name, price, description });

  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
}

module.exports = {
  validateLogin,
  validateProductsFields,
};
