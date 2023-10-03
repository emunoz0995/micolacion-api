const Users = require("./users.models");
const Roles = require('./roles.model');
const Client = require('./clients.model');
const Representative = require('./representative.model');
const Services = require('./services.model');
const Schools = require('./schools.model');
const Pruebas = require('./pruebas.model');
const Section = require('./sections.model');


const initModels = () => {

  Users.belongsTo(Roles,{ as: "user_rol", foreignKey: "role_id"});
  Roles.hasMany(Users, { as: "rol_user", foreignKey: "role_id"});

  Client.belongsTo(Section,{ as: "cliente_seccion", foreignKey: "codigo_seccion"});
  Section.hasMany(Client, { as: "seccion_cliente", foreignKey: "codigo_seccion"}); 
  Client.belongsTo(Representative,{ as: "cliente_representante", foreignKey: "codigo_representante"});
  Representative.hasMany(Client, { as: "representante_cliente", foreignKey: "codigo_representante"}); 
  Client.belongsTo(Services,{ as: "cliente_servicio", foreignKey: "codigo_servicio"});
  Services.hasMany(Client, { as: "servicio_cliente", foreignKey: "codigo_servicio"}); 
  Client.belongsTo(Schools,{ as: "cliente_colegio", foreignKey: "codigo_colegio"});
  Schools.hasMany(Client, { as: "colegio_cliente", foreignKey: "codigo_colegio"}); 

  Pruebas



};

module.exports = initModels;

