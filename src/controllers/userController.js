const userService = require("../services/userService");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

const generateToken = (email) => {
  const token = jwt.sign({ email }, JWT_SECRET || "secret", { expiresIn: "1h" });
  return token;
};

const createUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.createUser(email, password);
  if (!user) return res.status(400).json({ message: "Email already exists" });

  const token = generateToken(email);

  return res.status(200).json({ token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.login(email, password);
  if (!user) return res.status(401).json({ message: "Incorrect email or password" });

  const token = generateToken(email);

  return res.status(200).json({ token });
};

module.exports = {
  createUser,
  login,
};
