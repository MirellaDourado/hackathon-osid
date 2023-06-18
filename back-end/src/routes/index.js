const express = require('express');

const userRoute = require('./UserRoutes');
const productRoute = require('./ProductRoutes');
const { validateToken } = require('../middleware/validateToken');

const defaultRoute = express();

defaultRoute.use('/user', userRoute);
defaultRoute.use('/products', productRoute);

defaultRoute.use('/token', validateToken, async (req, res) => {
  const payload = req.payload;
  return res.status(200).json({ payload })
});

module.exports = defaultRoute;