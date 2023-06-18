const express = require('express');
const cors = require('cors');
const defaultRoute = require('../routes');

const app = express();

app.use(express.json());

app.use(cors());

// app.use(express.static('public'));

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/', defaultRoute);

module.exports = app;
