const express = require('express');
const products = require('./routes');

const app = express();

app.use(express.json());
app.use(products);

module.exports = app;
