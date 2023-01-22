// //Paquetes NPM
// const express = require("express");
// const uuid = require('uuid');


// //MODULOS DE RUTAS desde la carpeta routes
// const usersRoutes = require('./routes/usersApiRoutes')


// //simulacion de la BBDD. ./db/users.json
// const users = require("./db/users.json");


// // middlewares
// app.use(express.json()); // Habilitar tipo de dato a recibir
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'))


// const app = express();
// const PORT = 3000;




// //RUTAS
// // 1- Crea el endpoint /users (GET) que devuelva todos los usuarios
// app.get('/api/users', function (req, res) {
//   res.status(200).json(users)
// })
// // http://localhost:3000/api/users


// // 2- Crea el endpoint /users/:username (GET) que devuelva un único usuario en base al username (si hubiera varios, devuelve solo el primero)

// app.get('/api/users/username/:username', function (req, res) {
//   const username = req.params.username;
//   const user = users.find(u => u.username === username);
//   if (!user) {
//   return res.status(404).json({ error: 'User not found' });
//   }
//   res.status(200).json(user);
//   });
  
// //http://localhost:3000/api/users/username/Jianping_Shemesh  



// // 3- Crea el endpoint /users/total (GET) para devolver el total de usuarios

// app.get('/api/users/total', function (req, res) {
//   res.status(200).json(users.length)
// })

// // http://localhost:3000/api/users/total

// // 4- Crea el endpoint /users/country/:country (GET) para devolver todos los usuarios de un país en concreto recibido por params

// app.get('/api/users/country/:country', function (req, res) {
//   const country = req.params.country;
//   const usersByCountry = users.filter(u => u.address.country === country);
//   if(!usersByCountry.length) return res.status(404).json({ error: 'Users not found' });
//   res.status(200).json(usersByCountry);
//   });

// //http://localhost:3000/api/users/country/Somalia


// // 5- Crea el endpoint /users/vehicles (GET) para obtener email, username e imagen de los usuarioss que tengan un mínimo y un máximo de vehículos (req.query min y max)


// app.get('/api/users/vehicles/min&max?', function (req, res) {
//   const minVehicles = req.query.min;
//   const maxVehicles = req.query.max;
//   if(!minVehicles || !maxVehicles) return res.status(400).json({ error: 'Missing min or max query parameters' });
//   const usersWithVehicles = users.filter(u => u.vehicles.length >= minVehicles && u.vehicles.length <= maxVehicles);
//   if(!usersWithVehicles.length) return res.status(404).json({ error: 'Users not found' });
//   const filteredUsers = usersWithVehicles.map(u => ({ email: u.email, username: u.username, img: u.img }));
//   res.status(200).json(filteredUsers);
//   });

//   // http://localhost:3000/api/users/vehicles?min=2&max=4


// // 6- Crea el endpoint /users/:food (GET) para devolver todos los usuarios con una comida favorita en concreto a través de params

// app.get('/api/users/food/:food', function (req, res) {
//   const food = req.params.food;
//   const usersByFood = users.filter(u => u.favouritesFood.includes(food));
//   if(!usersByFood.length) return res.status(404).json({ error: 'Users not found' });
//   res.status(200).json(usersByFood);
//   });

//   // http://localhost:3000/api/users/food/Ramen


// // 7- Crea el endpoint /foods (GET) para devolver una lista de todas las comidas registradas UNICAS de todos los usuarios

// app.get('/api/foods', function (req, res) {
//   const allFoods = users.map(u => u.favouritesFood).flat();
//   const uniqueFoods = [...new Set(allFoods)];
//   res.status(200).json(uniqueFoods);
//   });

// // http://localhost:3000/api/foods


// // 8- Crea el endpoint /users/vehicles (GET) para obtener email, username e imagen de los usuarios que tenga, al menos, un coche con los detalles pasados por query string (fuel, manufacturer y/o model. Si están los 3 se filtra por los 3, si falta alguno, se filtra solo por los que existen. Si no hay ninguno, se saca la información de los usuarios que NO TIENEN COCHES)

// app.get('/api/users/vehicles/fuel&manufacturer&model?', function (req, res) {
//   const { fuel, manufacturer, model } = req.query;
//   let usersWithVehicles = [];
//   if (fuel && manufacturer && model) {
//   usersWithVehicles = users.filter(u => u.vehicles.some(v => v.fuel === fuel && v.manufacturer === manufacturer && v.model === model));
//   } else if (fuel && manufacturer) {
//   usersWithVehicles = users.filter(u => u.vehicles.some(v => v.fuel === fuel && v.manufacturer === manufacturer));
//   } else if (fuel && model) {
//   usersWithVehicles = users.filter(u => u.vehicles.some(v => v.fuel === fuel && v.model === model));
//   } else if (manufacturer && model) {
//   usersWithVehicles = users.filter(u => u.vehicles.some(v => v.manufacturer === manufacturer && v.model === model));
//   } else if (fuel) {
//   usersWithVehicles = users.filter(u => u.vehicles.some(v => v.fuel === fuel));
//   } else if (manufacturer) {
//   usersWithVehicles = users.filter(u => u.vehicles.some(v => v.manufacturer === manufacturer));
//   } else if (model) {
//   usersWithVehicles = users.filter(u => u.vehicles.some(v => v.model === model));
//   } else {
//   usersWithVehicles = users.filter(u => !u.vehicles.length);
//   }
//   if (!usersWithVehicles.length) return res.status(404).json({ error: 'Users not found' });
//   const filteredUsers = usersWithVehicles.map(u => ({ email: u.email, username: u.username, img: u.img }));
//   res.status(200).json(filteredUsers);
//   });

// // http://localhost:3000/api/users/vehicles?fuel=Diesel&manufacturer=Honda


// // 9- Crea el endpoint /vehicles (GET) para obtener la lista de coches únicos totales, junto con el total de ellos en base al tipo de combustible (recibido por query strings ?fuel=diesel, por ejemplo). Si no se pasa ningún tipo de combustibles, se buscan por todo tipo de combustibles

// app.get('/api/vehicles', function (req, res) {
//   const fuel = req.query.fuel;
//   let allVehicles = users.map(u => u.vehicles).flat();
//   if(fuel) {
//   allVehicles = allVehicles.filter(v => v.fuel === fuel);
//   }
//   const uniqueVehicles = [...new Set(allVehicles.map(v => v.car))];
//   const vehicles = uniqueVehicles.map(v => ({car: v, count: allVehicles.filter(vehicle => vehicle.car === v).length}));
//   res.status(200).json(vehicles);
//   });

//   // http://localhost:3000/api/users/vehicles/fuel&manufacturer&model?fuel=Electric&manufacturer=Jeep


// // 10- Crea el endpoint /users (POST) para recibir información en req.body para crear un usuario nuevo. Evita que se puedan crear usuarios si no hay, en req.body: email, firstname, lastname y username. Genera el id automáticamente (v4) (paquete uuid, más info en: https://www.npmjs.com/package/uuid). El resto de campos, si no están, crealos vacíos

// // app.post('/api/users', function (req, res) {
// //   const { email, firstName, lastName, username } = req.body;
// //   const newUser = {
// //     id: uuid.v4(),
// //     email,
// //     firstName,
// //     lastName,
// //     username,
// //     phone: '',
// //     img: '',
// //     address: {
// //       street: '',
// //       city: '',
// //       zipCode: '',
// //       county: '',
// //       country: ''
// //     },
// //     vehicles: [],
// //     favouritesFood: [],
// //     deleted: false
// //   };
// //   users.push(newUser);
// //   if (!email || !firstName || !lastName || !username) return res.status(400).json({ error: 'Missing required fields' });
// //   res.json(newUser);
// // });


// // 11- Crea el endpoint /users/:username (PUT) para obtener información del usuario a través de req.body (menos el id, los vehículos, los alimentos y el campo deleted) y actualiza dicho usuario

// // app.put('/api/users/:username', function (req, res) {
// //   const { username } = req.params;
// //   const { email, firstName, lastName, phone, img, address } = req.body;
// //   const userIndex = users.findIndex(u => u.username === username);
// //   if (userIndex === -1) return res.status(404).json({ error: 'User not found' });
  
// //   const updatedUser = {
// //       ...users[userIndex],
// //       email: email || users[userIndex].email,
// //       firstName: firstName || users[userIndex].firstName,
// //       lastName: lastName || users[userIndex].lastName,
// //       phone: phone || users[userIndex].phone,
// //       img: img || users[userIndex].img,
// //       address: {
// //           ...users[userIndex].address,
// //           ...address
// //       },
// //   };
// //   users[userIndex] = updatedUser;
// //   res.json(updatedUser);
// // });


// // 12- Crea el endpoint /users/:username/vehicles (PUT) para obtener una lista de vehículos en req.body (puede ser uno o muchos. Si no es ninguno, que no haga nada) y añádelos a los existentes del usuario específico (usuario a través de params)


// // 13- Crea el endpoint /users/:username/foods (PUT) para obtener una lista de alimentos en req.body, junto con el nombre del usuario por params y añade la lista de dichos alimentos a la lista de comidas favoritas de dicho usuario. Si no se recibe ningún alimento, se eliminan todos los que tienen


// // 14-Crea el endpoint /users/:username/hide (PUT) para recibir el email en req.body y cambiar la visibilidad de ese usuario para que no aparezca si se busca (se entenderá como borrado para el mismo usuario)


// // 15 -Crea el endpoint /user/:username (DELETE) para recibir en req.body el email y elimina definitivamente dicho usuario de la lista. Devuelve el usuario borrado. IMPORTANTE! Solo se puede borrar si el campo deleted está a true. Si no, devolverá un error


// app.listen(PORT, () => {
//   console.info(`> Estoy arribísima en el puerto ${PORT}! ✨🦄`);
// });
