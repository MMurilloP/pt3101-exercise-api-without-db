// la logica solo:


//1
const devuelveUser = function (req, res) {
    res.status(200).json(users)
  };

//2
const unoUser= function (req, res) {
    const username = req.params.username;
    const user = users.find(u => u.username === username);
    if (!user) {
    return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
    };

//3

const totalUsuarios = function (req, res) {
    res.status(200).json(users.length)
  };

//4

const usuarioPais = function (req, res) {
    const country = req.params.country;
    const usersByCountry = users.filter(u => u.address.country === country);
    if(!usersByCountry.length) return res.status(404).json({ error: 'Users not found' });
    res.status(200).json(usersByCountry);
    }

//5

const vehiculoMinMax =  function (req, res) {
    const minVehicles = req.query.min;
    const maxVehicles = req.query.max;
    if(!minVehicles || !maxVehicles) return res.status(400).json({ error: 'Missing min or max query parameters' });
    const usersWithVehicles = users.filter(u => u.vehicles.length >= minVehicles && u.vehicles.length <= maxVehicles);
    if(!usersWithVehicles.length) return res.status(404).json({ error: 'Users not found' });
    const filteredUsers = usersWithVehicles.map(u => ({ email: u.email, username: u.username, img: u.img }));
    res.status(200).json(filteredUsers);
    }

//6

const comidaFavorita =  function (req, res) {
    const food = req.params.food;
    const usersByFood = users.filter(u => u.favouritesFood.includes(food));
    if(!usersByFood.length) return res.status(404).json({ error: 'Users not found' });
    res.status(200).json(usersByFood);
    }

//7

const comidas =  function (req, res) {
    const allFoods = users.map(u => u.favouritesFood).flat();
    const uniqueFoods = [...new Set(allFoods)];
    res.status(200).json(uniqueFoods);
    }

//8

const vehiculosFuelMarca =  function (req, res) {
    const { fuel, manufacturer, model } = req.query;
    let usersWithVehicles = [];
    if (fuel && manufacturer && model) {
    usersWithVehicles = users.filter(u => u.vehicles.some(v => v.fuel === fuel && v.manufacturer === manufacturer && v.model === model));
    } else if (fuel && manufacturer) {
    usersWithVehicles = users.filter(u => u.vehicles.some(v => v.fuel === fuel && v.manufacturer === manufacturer));
    } else if (fuel && model) {
    usersWithVehicles = users.filter(u => u.vehicles.some(v => v.fuel === fuel && v.model === model));
    } else if (manufacturer && model) {
    usersWithVehicles = users.filter(u => u.vehicles.some(v => v.manufacturer === manufacturer && v.model === model));
    } else if (fuel) {
    usersWithVehicles = users.filter(u => u.vehicles.some(v => v.fuel === fuel));
    } else if (manufacturer) {
    usersWithVehicles = users.filter(u => u.vehicles.some(v => v.manufacturer === manufacturer));
    } else if (model) {
    usersWithVehicles = users.filter(u => u.vehicles.some(v => v.model === model));
    } else {
    usersWithVehicles = users.filter(u => !u.vehicles.length);
    }
    if (!usersWithVehicles.length) return res.status(404).json({ error: 'Users not found' });
    const filteredUsers = usersWithVehicles.map(u => ({ email: u.email, username: u.username, img: u.img }));
    res.status(200).json(filteredUsers);
    }

//9

const vehiculos = function (req, res) {
    const fuel = req.query.fuel;
    let allVehicles = users.map(u => u.vehicles).flat();
    if(fuel) {
    allVehicles = allVehicles.filter(v => v.fuel === fuel);
    }
    const uniqueVehicles = [...new Set(allVehicles.map(v => v.car))];
    const vehicles = uniqueVehicles.map(v => ({car: v, count: allVehicles.filter(vehicle => vehicle.car === v).length}));
    res.status(200).json(vehicles);
    }
//10
//11
//12
//13
//14
//15
 


  
  // 10- Crea el endpoint /users (POST) para recibir información en req.body para crear un usuario nuevo. Evita que se puedan crear usuarios si no hay, en req.body: email, firstname, lastname y username. Genera el id automáticamente (v4) (paquete uuid, más info en: https://www.npmjs.com/package/uuid). El resto de campos, si no están, crealos vacíos
  
  // app.post('/api/users', function (req, res) {
  //   const { email, firstName, lastName, username } = req.body;
  //   const newUser = {
  //     id: uuid.v4(),
  //     email,
  //     firstName,
  //     lastName,
  //     username,
  //     phone: '',
  //     img: '',
  //     address: {
  //       street: '',
  //       city: '',
  //       zipCode: '',
  //       county: '',
  //       country: ''
  //     },
  //     vehicles: [],
  //     favouritesFood: [],
  //     deleted: false
  //   };
  //   users.push(newUser);
  //   if (!email || !firstName || !lastName || !username) return res.status(400).json({ error: 'Missing required fields' });
  //   res.json(newUser);
  // });
  
  
  // 11- Crea el endpoint /users/:username (PUT) para obtener información del usuario a través de req.body (menos el id, los vehículos, los alimentos y el campo deleted) y actualiza dicho usuario
  
  // app.put('/api/users/:username', function (req, res) {
  //   const { username } = req.params;
  //   const { email, firstName, lastName, phone, img, address } = req.body;
  //   const userIndex = users.findIndex(u => u.username === username);
  //   if (userIndex === -1) return res.status(404).json({ error: 'User not found' });
    
  //   const updatedUser = {
  //       ...users[userIndex],
  //       email: email || users[userIndex].email,
  //       firstName: firstName || users[userIndex].firstName,
  //       lastName: lastName || users[userIndex].lastName,
  //       phone: phone || users[userIndex].phone,
  //       img: img || users[userIndex].img,
  //       address: {
  //           ...users[userIndex].address,
  //           ...address
  //       },
  //   };
  //   users[userIndex] = updatedUser;
  //   res.json(updatedUser);
  // });
  
  
  // 12- Crea el endpoint /users/:username/vehicles (PUT) para obtener una lista de vehículos en req.body (puede ser uno o muchos. Si no es ninguno, que no haga nada) y añádelos a los existentes del usuario específico (usuario a través de params)
  
  
  // 13- Crea el endpoint /users/:username/foods (PUT) para obtener una lista de alimentos en req.body, junto con el nombre del usuario por params y añade la lista de dichos alimentos a la lista de comidas favoritas de dicho usuario. Si no se recibe ningún alimento, se eliminan todos los que tienen
  
  
  // 14-Crea el endpoint /users/:username/hide (PUT) para recibir el email en req.body y cambiar la visibilidad de ese usuario para que no aparezca si se busca (se entenderá como borrado para el mismo usuario)
  
  
  // 15 -Crea el endpoint /user/:username (DELETE) para recibir en req.body el email y elimina definitivamente dicho usuario de la lista. Devuelve el usuario borrado. IMPORTANTE! Solo se puede borrar si el campo deleted está a true. Si no, devolverá un error


  module.exports = {
    devuelveUser,
    unoUser,
    totalUsuarios,
    usuarioPais,
    vehiculoMinMax,
    comidaFavorita,
    comidas,
    vehiculosFuelMarca,
    vehiculos
  }