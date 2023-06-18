const express = require('express');
const { product } = require('../controller');
const { validateAdminToken, validateToken } = require('../middleware/validateToken');

const productRoutes = express();

productRoutes.get('/:id', product.getById);

productRoutes.get('/', product.getAll);

productRoutes.post('/', validateToken, validateAdminToken, product.create);

productRoutes.put('/:id', validateToken, validateAdminToken, product.update);

productRoutes.delete('/:id', validateToken, validateAdminToken, product.remove);

module.exports = productRoutes;
