const Joi = require("joi");

const invalidUpdatedQuantity = async (req, res, next) => {
  const { order } = req.body;
  let invalidQuantity = 0;
  if (order === undefined) return next();
  const schema = Joi.object({
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
  const { error } = schema.validate({ order });

  if (error) return res.status(400).json({ message: error.details[0].message });

  await Promise.all(
    order.map(async (item) => {
      invalidQuantity += item.quantity;
    })
  );
  if (invalidQuantity > 5) {
    throw new Error("400|Maxmimum allowed items per order is 5");
  }
  next();
};

const invalidUpdatedFields = async (req, _res, next) => {
  const { body } = req;
  let invalidField = [];
  Object.entries(body).map((item) => {
    item.forEach((field) => {
      if (!field.length) {
        invalidField.push(field);
      }
    });
  });
  if (invalidField.length) {
    throw new Error("400|Invalid fields to update");
  }
  next();
}

module.exports = {
  invalidUpdatedQuantity,
  invalidUpdatedFields,
};
