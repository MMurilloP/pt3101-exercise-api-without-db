//Paquetes NPM
const express = require("express");
const uuid = require('uuid');
const users = require("./db/users.json");



//MODULOS DE RUTAS desde la carpeta routes
const usersApiRoutes = require('./routes/usersApiRoutes')


//simulacion de la BBDD. ./db/users.json


// middlewares

const app = express();
const PORT = 3000;

//rutas
app.use('/', usersApiRoutes);



app.listen(PORT, () => {
  console.info(`> Estoy arribísima en el puerto ${PORT}! ✨🦄`);
});
