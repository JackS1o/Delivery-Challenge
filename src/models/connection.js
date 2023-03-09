const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_DB_URL = 'mongodb://localhost:27017/Delivery';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
