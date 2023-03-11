const userModel = require("../models/userModel");

const createUser = async (email, password) => {
  const verifyUserExists = await userModel.findOne({ email });
  if (verifyUserExists) return null;
  const user = await userModel.create({ email, password });
  return user;
};

const login = async (email, password) => {
  const user = await userModel.findOne({ email, password });
  if (!user) return null;
  return user;
}

module.exports = {
  createUser,
  login,
};
