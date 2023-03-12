const invalidUpdatedQuantity = async (req, res, next) => {
  const { order } = req.body;
  let invalidQuantity = 0;
  if (order === undefined) return next();
  await Promise.all(
    order.map(async (item) => {
      invalidQuantity += item.quantity;
    })
  );
  if (invalidQuantity > 5) {
    return res
      .status(400)
      .json({ message: "Maxmimum allowed items per order is five" });
  }
  next();
};

const invalidUpdatedFields = async (req, res, next) => {
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
    return res.status(400).json({ message: "Invalid fields to update" });
  }
  next();
}

module.exports = {
  invalidUpdatedQuantity,
  invalidUpdatedFields,
};
