const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require("./utils/database");
const initModels = require("./models/init.models");
const routerApi = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

db.authenticate()
    .then(() => console.log('Autenticacion exitosa'))
    .catch((error) => console.log(error));

initModels();

db.sync({ force: false }) //devuelve una promesa
    .then(() => console.log('Base de datos sincronizada'))
    .catch((error) => console.log(error));

routerApi(app);

module.exports = app;