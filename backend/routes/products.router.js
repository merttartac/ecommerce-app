const express = require('express');
const productsRouter = express.Router();
const productsController = require('../controllers/products.controller');

//MIDDLEWARE FOR LOGGING
productsRouter.use((req, res, next) => {
    console.log('ip address: %o', req.ip);
    next();
});

productsRouter.get('/', productsController.getProducts);
productsRouter.post('/', productsController.submitProduct);

module.exports = productsRouter;