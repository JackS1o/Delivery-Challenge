require('express-async-errors');

const errorHandler = (err, _req, res, _next) => {
  const [code, message] = err.message.split('|');
  return res.status(code).json({ message });
};

module.exports = { errorHandler };
