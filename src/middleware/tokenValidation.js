const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const authToken = (req, _res, next) => {
  const { authorization } = req.headers;
  if (!authorization) throw new Error('401|Token not found');
  
  try {
    const { email } = jwt.verify(authorization, JWT_SECRET || 'secret');
    req.auth = email;
  } catch (error) {
    throw new Error('401|Expired or invalid token');
  }
  next();
};

module.exports = {
  authToken,
};
