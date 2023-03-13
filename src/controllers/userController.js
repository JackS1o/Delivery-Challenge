const userService = require("../services/userService");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

const generateToken = (email) => {
  const token = jwt.sign({ email }, JWT_SECRET || "secret", { expiresIn: "1h" });
  return token;
};

const createUser = async (req, res) => {
  const { email, password } = req.body;
  await userService.createUser(email, password);

  const token = generateToken(email);

  return res.status(200).json({ token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  await userService.login(email, password);

  const token = generateToken(email);

  return res.status(200).json({ token });
};

module.exports = {
  createUser,
  login,
};
