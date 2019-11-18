"use strict";

var mongoosePaginate = require('mongoose-pagination');
var Product = require("../models/product");


// devolver un listado de productos paginados

function getProducts(req, res){
    var page = 1;
    if(req.params.page){
        page = req.params.page;
    }
    var itemsPerPage = 5;

    Product.find().sort('_id').paginate(page, itemsPerPage, (err, products, total) => {
        if(err) return res.status(500).send({message: 'Error en la petición'});
        
        if(!products) return res.status(404).send({message: 'No hay productos disponibles'});

        return res.status(200).send({
            products,
            total,
            pages: Math.ceil(total/itemsPerPage)
        })

    });
}

function getProduct(req, res){
    var productId = req.params.id;

    Product.findById(productId, (err, product) =>{
        if(err) return res.status(500).send({message: 'Error en la petición'});

        if(!product) return res.status(404).send({message: 'El producto no existe'});
        
        return res.status(200).send({product});

    });
}

module.exports = {
  
  getProducts,
  getProduct
};