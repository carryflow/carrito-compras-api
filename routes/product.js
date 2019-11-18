'use strict'

var express = require('express');
var ProductController = require('../controllers/product');
var  md_auth = require('../middleware/authenticated')

var api = express.Router();

api.get('/products/:page?',  ProductController.getProducts);
api.get('/product/:id', ProductController.getProduct);


module.exports = api;