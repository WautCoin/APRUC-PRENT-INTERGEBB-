'use strict';

const express = require('express');
const healthRouter = require('./routes/health');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/health', healthRouter);

module.exports = app;
