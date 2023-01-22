//Paquetes NPM
const express = require("express");
const uuid = require('uuid');
const users = require("./db/users.json");
const path = require('path');



//MODULOS DE RUTAS desde la carpeta routes
const usersApiRoutes = require('./routes/usersApiRoutes')


//simulacion de la BBDD. ./db/users.json


// middlewares

const app = express();
const PORT = 3000;

//rutas
app.use('/', usersApiRoutes);

app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, 'readme.md'));
});


app.listen(PORT, () => {
  console.info(`> Estoy arribísima en el puerto ${PORT}! ✨🦄`);
});
