"use strict";

var mongoosePaginate = require("mongoose-pagination");
var Order = require("../models/order");

function saveOrder(req, res) {
  var params = req.body;
  var order = new Order();

  if (params.user) {
    order.user = params.user;
    order.carts = params.carts;
    order.email = params.email;
    order.paymentId = params.paymentId;


    order.save((err, orderStored) => {
      if (err)
        return res.status(500).send({ message: "Error al guardar la orden" });

      if (orderStored) {
        res.status(200).send({ order: orderStored });
      } else {
        res.status(404).send({ message: "No se ha registrado la orden" });
      }
    });
  } else {
    res.status(200).send({
      message: "Envia todos los campos necesarios!!"
    });
  }
}


function getMyOrders(req, res){
  var user = req.params.id;

  Order.find({user}, (err, orders) =>{
      if(err) return res.status(500).send({message: 'Error en la petición'});

      if(!orders) return res.status(404).send({message: 'No tienes ordenes disponibles'});
      
      return res.status(200).send({orders});

  });
}

module.exports = {

  saveOrder,
  getMyOrders
};
