const users = require("../db/users.json");


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
const vehiculoMinMax =  (req, res) => {
    const min = req.query.min;
    const max = req.query.max;
    const filteredUsers = users.filter(user => {
        return user.vehicles.length >= min && user.vehicles.length <= max;
    });
    const response = filteredUsers.map(user => {
        return {
            email: user.email,
            username: user.username,
            img: user.img
        }
    });
    res.json(response);
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

const vehiculosFuelMarca =  (req, res) => {
    const fuel = req.query.fuel;
    const manufacturer = req.query.manufacturer;
    const model = req.query.model;
    let filteredUsers;
    if(!fuel && !manufacturer && !model){
        filteredUsers = users.filter(user => {
            return user.vehicles.length === 0;
        });
    } else {
        filteredUsers = users.filter(user => {
            return user.vehicles.some(vehicle => {
                return (!fuel || vehicle.fuel === fuel) && (!manufacturer || vehicle.manufacturer === manufacturer) && (!model || vehicle.model === model);
            });
        });
    }
    const response = filteredUsers.map(user => {
        return {
            email: user.email,
            username: user.username,
            img: user.img
        }
    });
    res.json(response);
}

//9

const vehiculos = (req, res) => {
    const fuel = req.query.fuel;
    let vehicles = [];
    for(let i = 0; i < users.length; i++) {
        vehicles = vehicles.concat(users[i].vehicles);
    }
    if (fuel) {
        vehicles = vehicles.filter(vehicle => vehicle.fuel === fuel);
    }
    const uniqueVehicles = Array.from(new Set(vehicles.map(vehicle => vehicle.car))).map(car => {
        return {
            car: car,
            total: vehicles.filter(vehicle => vehicle.car === car).length
        }
    });
    res.json(uniqueVehicles);
};
//10
//11
//12
//13
//14
//15
 
 
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