'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3800;

//conexion a la base de datos
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://carlos:Canabal1027@cluster0-1e4jl.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true,
useFindAndModify: false})
        .then(()=>{
            console.log("La conexion a la base de datos carrito de compras se ha realizado con exito!!");

            //crear servidor
            app.listen(port, () => {
                console.log("Servidor corriendo en  http://localhost:3800");
            })
        })
        .catch(err => console.log(err))