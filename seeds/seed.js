var mongoose = require('mongoose');
var Product = require('../models/product')

mongoose.connect('mongodb://localhost:27017/carrito_compras', { useNewUrlParser: true, useUnifiedTopology: true})


var products = [
    new Product({
        imagePath : 'https://i.blogs.es/5f2c41/1/450_1000.jpg',
        title : 'Call of Duty: Black Ops IIII',
        description : 'Lorem nulla mollit deserunt elit eiusmod commodo. Excepteur aliqua nostrud eiusmod elit. Aute reprehenderit aute quis magna aliqua laboris nostrud aute sint esse consectetur eu sint irure. Dolore consequat anim id fugiat nulla. Tempor excepteur ea aliqua ipsum officia duis quis esse reprehenderit aliqua eu. Nulla esse fugiat qui laborum enim.',
        price : 120.250
    }),
    new Product({
        imagePath : 'https://as.com/meristation/imagenes/2019/06/09/avances/1560048960_501336_1560072037_noticia_normal.jpg',
        title : 'FIFA 20',
        description : 'Lorem nulla mollit deserunt elit eiusmod commodo. Excepteur aliqua nostrud eiusmod elit. Aute reprehenderit aute quis magna aliqua laboris nostrud aute sint esse consectetur eu sint irure. Dolore consequat anim id fugiat nulla. Tempor excepteur ea aliqua ipsum officia duis quis esse reprehenderit aliqua eu. Nulla esse fugiat qui laborum enim.',
        price : 220.499
    }),
    new Product({
        imagePath : 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2018/04/god-war-guia-trucos.jpg?itok=dab4e-oK',
        title : 'God Of War: 4',
        description : 'Lorem nulla mollit deserunt elit eiusmod commodo. Excepteur aliqua nostrud eiusmod elit. Aute reprehenderit aute quis magna aliqua laboris nostrud aute sint esse consectetur eu sint irure. Dolore consequat anim id fugiat nulla. Tempor excepteur ea aliqua ipsum officia duis quis esse reprehenderit aliqua eu. Nulla esse fugiat qui laborum enim.',
        price : 85.254
    }),
    new Product({
        imagePath : 'https://steamcdn-a.akamaihd.net/steam/apps/996470/header.jpg?t=1568401277',
        title : 'PES 20',
        description : 'Lorem nulla mollit deserunt elit eiusmod commodo. Excepteur aliqua nostrud eiusmod elit. Aute reprehenderit aute quis magna aliqua laboris nostrud aute sint esse consectetur eu sint irure. Dolore consequat anim id fugiat nulla. Tempor excepteur ea aliqua ipsum officia duis quis esse reprehenderit aliqua eu. Nulla esse fugiat qui laborum enim.',
        price : 145.669
    }),
    new Product({
        imagePath : 'https://images.g2a.com/newlayout/323x433/1x1x0/387a113709aa/59e5efeb5bafe304c4426c47',
        title : 'Grand Theft Auto V (GTA 5) ',
        description : 'Lorem nulla mollit deserunt elit eiusmod commodo. Excepteur aliqua nostrud eiusmod elit. Aute reprehenderit aute quis magna aliqua laboris nostrud aute sint esse consectetur eu sint irure. Dolore consequat anim id fugiat nulla. Tempor excepteur ea aliqua ipsum officia duis quis esse reprehenderit aliqua eu. Nulla esse fugiat qui laborum enim.',
        price : 52.999
    }),
    new Product({
        imagePath : 'https://i.blogs.es/60afee/devil-may-cry-5-analisis-01/450_1000.jpg',
        title : 'Devil May Cry 5',
        description : 'Lorem nulla mollit deserunt elit eiusmod commodo. Excepteur aliqua nostrud eiusmod elit. Aute reprehenderit aute quis magna aliqua laboris nostrud aute sint esse consectetur eu sint irure. Dolore consequat anim id fugiat nulla. Tempor excepteur ea aliqua ipsum officia duis quis esse reprehenderit aliqua eu. Nulla esse fugiat qui laborum enim.',
        price : 65.799
    }),
    new Product({
        imagePath : 'https://hb.imgix.net/83dc5680b12beb0abd9c6ed68bcb73d3ca6940ed.jpg?auto=compress,format&fit=crop&h=353&w=616&s=a3e93dcafdf4f72fdaabf47302316eb0',
        title : 'Resident Evil 5 ',
        description : 'Lorem nulla mollit deserunt elit eiusmod commodo. Excepteur aliqua nostrud eiusmod elit. Aute reprehenderit aute quis magna aliqua laboris nostrud aute sint esse consectetur eu sint irure. Dolore consequat anim id fugiat nulla. Tempor excepteur ea aliqua ipsum officia duis quis esse reprehenderit aliqua eu. Nulla esse fugiat qui laborum enim.',
        price : 80.250
    }),
    new Product({
        imagePath : 'https://compass-ssl.xbox.com/assets/4d/d4/4dd4dc7e-964c-43cf-aac4-f7d03fc40172.jpg?n=1616161616_GLP-Page-Hero-1084_1920x1080.jpg',
        title : 'Gears 5',
        description : 'Lorem nulla mollit deserunt elit eiusmod commodo. Excepteur aliqua nostrud eiusmod elit. Aute reprehenderit aute quis magna aliqua laboris nostrud aute sint esse consectetur eu sint irure. Dolore consequat anim id fugiat nulla. Tempor excepteur ea aliqua ipsum officia duis quis esse reprehenderit aliqua eu. Nulla esse fugiat qui laborum enim.',
        price : 40.365
    }),
    new Product({
        imagePath : 'https://media.playstation.com/is/image/SCEA/tom-clancys-ghost-recon-breakpoint-hero-banner-01-ps4-us-03may19?$native_nt$',
        title : 'Tom Clancys Ghost Recon Breakpoint',
        description : 'Lorem nulla mollit deserunt elit eiusmod commodo. Excepteur aliqua nostrud eiusmod elit. Aute reprehenderit aute quis magna aliqua laboris nostrud aute sint esse consectetur eu sint irure. Dolore consequat anim id fugiat nulla. Tempor excepteur ea aliqua ipsum officia duis quis esse reprehenderit aliqua eu. Nulla esse fugiat qui laborum enim.',
        price : 135.587
    }),
    new Product({
        imagePath : 'https://d3tg06jbotvai2.cloudfront.net/game_tetiere/upload/gameimage/file/37621.jpeg',
        title : 'Battlefield 5',
        description : 'Lorem nulla mollit deserunt elit eiusmod commodo. Excepteur aliqua nostrud eiusmod elit. Aute reprehenderit aute quis magna aliqua laboris nostrud aute sint esse consectetur eu sint irure. Dolore consequat anim id fugiat nulla. Tempor excepteur ea aliqua ipsum officia duis quis esse reprehenderit aliqua eu. Nulla esse fugiat qui laborum enim.',
        price : 200.000
    }),
];

var done = 0;

for (let index = 0; index < products.length; index++) {
    products[index].save(function (err, result){
        done++;
        if (done === products.length) {
            exit();
        }
    })   
}

function exit(){
    mongoose.disconnect();
}