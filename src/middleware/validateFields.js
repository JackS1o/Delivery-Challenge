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

const validateOrderFields = (req, res, next) => {
  const { paymentMethod, address, order } = req.body;

  const schema = Joi.object({
    paymentMethod: Joi.string().required(),
    address: Joi.string().required(),
    order: Joi.array().items(
      Joi.object({
        _id: Joi.string().required(),
        name: Joi.string().required(),
        quantity: Joi.number().required(),
        description: Joi.string().required(),
        price: Joi.number().required(),
      })
    ),
  });

  const { error } = schema.validate({ paymentMethod, address, order });

  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};

module.exports = {
  validateLogin,
  validateOrderFields,
};
