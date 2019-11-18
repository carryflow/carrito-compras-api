'use strict'

var express = require('express');
var OrderController = require('../controllers/order');
var  md_auth = require('../middleware/authenticated')

var api = express.Router();

api.post('/order', md_auth.ensureAuth, OrderController.saveOrder);
api.get('/my-orders/:id', md_auth.ensureAuth, OrderController.getMyOrders )

module.exports = api;