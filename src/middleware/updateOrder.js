const Joi = require("joi");

const invalidUpdatedQuantity = async (order) => {
  let invalidQuantity = 0;

  await Promise.all(
    order.map(async (item) => {
      invalidQuantity += item.quantity;
    })
  );
  return invalidQuantity;
};

const invalidUpdatedQuantityMVP = async (req, _res, next) => {
  const { order } = req.body;
  const result = await invalidUpdatedQuantity(order);
  if (result > 5) {
    throw new Error("400|Maxmimum allowed items per order is 5");
  }
  next();
}

const invalidUpdatedQuantityEarlyAdop = async (req, _res, next) => {
  const { order } = req.body;
  const result = await invalidUpdatedQuantity(order);
  if (result > 15) {
    throw new Error("400|Maxmimum allowed items per order is 15");
  }
  next();
}

const invalidUpdatedQuantityEarlyMajor = async (req, _res, next) => {
  const { order } = req.body;
  const result = await invalidUpdatedQuantity(order);
  if (result > 20) {
    throw new Error("400|Maxmimum allowed items per order is 20");
  }
  next();
}

const invalidUpdatedFields = async (req, res, next) => {
  const { body } = req;
  const { order } = body;
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
  invalidUpdatedQuantityMVP,
  invalidUpdatedFields,
  invalidUpdatedQuantityEarlyAdop,
  invalidUpdatedQuantityEarlyMajor,
};
