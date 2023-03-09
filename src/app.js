const express = require('express');
const carRouter = require('./routes/cars');
const errorHandler = require('./middleware/error');

const app = express();

app.use(express.json());
app.use(carRouter);
app.use(errorHandler);

export default app;