"use strict";

var bcrypt = require("bcrypt-nodejs");
var mongoosePaginate = require('mongoose-pagination');
var User = require("../models/user");
var jwt = require("../services/jwt")

function home(req, res) {
  res.status(200).send({
    message: "Hola mundo desde el servidor de nodeJs"
  });
}

function pruebas(req, res) {
  res.status(200).send({
    message: "Acción de pruebas en el servidor de nodeJs"
  });
}

function saveUser(req, res) {
  var params = req.body;
  var user = new User();

  if (params.name && params.surname && params.email && params.password) {
    user.name = params.name;
    user.surname = params.surname;
    user.nick = params.nick;
    user.email = params.email;
    user.name = params.name;
    user.name = params.name;
    user.role = "ROLE_USER";
    user.image = null;

    //Controlar usuarios duplicados
    User.find({
      $or: [
        { email: user.email.toLowerCase() },
        { nick: user.nick.toLowerCase() }
      ]
    }).exec((err, users) => {
      if (err)
        return res
          .status(500)
          .send({ message: "Error en la peticion de usuarios" });

      if (users && users.length >= 1) {
        return res
          .status(200)
          .send({ mesage: "El usuario que intentas registrar ya existe!!" });
      } else {
        //cifrar la password y guarda los datos
        bcrypt.hash(params.password, null, null, (err, hash) => {
          user.password = hash;

          user.save((err, userStored) => {
            if (err)
              return res
                .status(500)
                .send({ message: "Error al guardar el usuario" });

            if (userStored) {
              res.status(200).send({ user: userStored });
            } else {
              res
                .status(404)
                .send({ message: "No se ha registrado el usuario" });
            }
          });
        });
      }
    });
  } else {
    res.status(200).send({
      message: "Envia todos los campos necesarios!!"
    });
  }
}

function loginUser(req, res){
    var params = req.body;
    var email = params.email;
    var password = params.password;

    User.findOne({email: email}, (err, user) =>{
        if(err) return res.status(500).send({ message: "Error en la petición" });

        if(user){
            bcrypt.compare(password, user.password, (err, check) =>{
                if(check){
                    
                    if (params.gettoken) {
                        //generar y devolver token
                        return res.status(200).send({
                            token: jwt.createToken(user)
                        })
                    }else{
                        // devolver datos de usuario
                        user.password = undefined;
                        return res.status(200).send({user});
                    }
                    

                }else{
                    return res.status(404).send({ message: "El usuario no se ha podido identificar" });
                }
            });
        }else{
            return res.status(404).send({ message: "El usuario no se ha podido identificar!!" });
        }
    })
}

// Conseguir datos de un usuario

function getUser(req, res){
    var userId = req.params.id;

    User.findById(userId, (err, user) =>{
        if(err) return res.status(500).send({message: 'Error en la petición'});

        if(!user) return res.status(404).send({message: 'El usuario no existe'});
        
        user.password = undefined;
        return res.status(200).send({user});
    })
}

// devolver un listado de usuarios paginados

function getUsers(req, res){
    var identity_user_id = req.user.sub;

    var page = 1;
    if(req.params.page){
        page = req.params.page;
    }

    var itemsPerPage = 5;

    User.find().sort('_id').paginate(page, itemsPerPage, (err, users, total) => {
        if(err) return res.status(500).send({message: 'Error en la petición'});
        
        if(!users) return res.status(404).send({message: 'No hay usuarios disponibles'});

        return res.status(200).send({
            users,
            total,
            pages: Math.ceil(total/itemsPerPage)
        })

    });


}

module.exports = {
  home,
  pruebas,
  saveUser,
  loginUser,
  getUser,
  getUsers
};
