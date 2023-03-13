const userModel = require("../models/userModel");

const createUser = async (email, password) => {
  const verifyUserExists = await userModel.findOne({ email });
  if (verifyUserExists) throw new Error('400|Email already exists');
  const user = await userModel.create({ email, password });
  return user;
};

const login = async (email, password) => {
  const user = await userModel.findOne({ email, password });
  if (!user) throw new Error('401|Incorrect username or password');
  return user;
}

module.exports = {
  createUser,
  login,
};
