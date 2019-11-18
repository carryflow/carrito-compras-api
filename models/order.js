'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    carts: {type: Object, required: true},
    email: {type: String, required: true},
    paymentId: {type: String, require: true},
});

module.exports = mongoose.model('Order', OrderSchema);