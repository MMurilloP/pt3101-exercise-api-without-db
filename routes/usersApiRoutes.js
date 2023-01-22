const express = require('express');
const usersApiRouter = express.Router();
const usersApiControllers = require ('../controllers/usersApiControllers');



//1
usersApiRouter.get('/api/users', usersApiControllers.devuelveUser)

//2
usersApiRouter.get('/api/users/username/:username', usersApiControllers.unoUser)

//3
usersApiRouter.get('/api/users/total', usersApiControllers.totalUsuarios)

//4
usersApiRouter.get('/api/users/country/:country', usersApiControllers.usuarioPais)

//5
usersApiRouter.get('/api/users/vehicles/', usersApiControllers.vehiculoMinMax)

//6
usersApiRouter.get('/api/users/food/:food', usersApiControllers.comidaFavorita)

//7
usersApiRouter.get('/api/foods', usersApiControllers.comidas)

//8
usersApiRouter.get('/api/users/vehicles/fuel&brand?', usersApiControllers.vehiculosFuelMarca)

//9
usersApiRouter.get('/vehicles', usersApiControllers.vehiculos)

// //10
// usersApiRouter.get

// //11
// usersApiRouter.get

// //12
// usersApiRouter.get

// //13
// usersApiRouter.get

// //14
// usersApiRouter.get



module.exports = usersApiRouter;
