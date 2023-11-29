const Users = require("./users.models");
const Roles = require('./roles.model');
const Client = require('./clients.model');
const Representative = require('./representative.model');
const Services = require('./services.model');
const Schools = require('./schools.model');
const Section = require('./sections.model');
const History = require('./historical.model'); 
const XML = require('./generateXML.model');
const StudentServices = require('./studentServices.model');
const Consecutivo = require('./consecutivo.model');

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

  History.belongsTo(Section,{ as: "history_seccion", foreignKey: "codigo_seccion"});
  Section.hasMany(History, { as: "seccion_history", foreignKey: "codigo_seccion"}); 
  History.belongsTo(Representative,{ as: "history_representante", foreignKey: "codigo_representante"});
  Representative.hasMany(History, { as: "representante_history", foreignKey: "codigo_representante"}); 
  History.belongsTo(Services,{ as: "history_servicio", foreignKey: "codigo_servicio"});
  Services.hasMany(History, { as: "servicio_history", foreignKey: "codigo_servicio"});

  History.belongsTo(Services,{ as: "history_servicioPrincipal", foreignKey: "servicio_principal"});
  Services.hasMany(History, { as: "servicioPrincipalhistory", foreignKey: "servicio_principal"}); 

  StudentServices.belongsTo(Client,{as:'cliente',foreignKey:'client_id'});
  StudentServices.belongsTo(Services,{as:'servicio', foreignKey:'service_id'});
  Client.hasMany(StudentServices, {as:'client_studendtService', foreignKey:'client_id'})
  
  History.belongsTo(Schools,{ as: "history_colegio", foreignKey: "codigo_colegio"});
  Schools.hasMany(History, { as: "colegio_history", foreignKey: "codigo_colegio"});
  XML.belongsTo(Section,{ as: "XML_seccion", foreignKey: "codigo_seccion"});
  Section.hasMany(XML, { as: "seccion_XML", foreignKey: "codigo_seccion"}); 
  XML.belongsTo(Representative,{ as: "XML_representante", foreignKey: "codigo_representante"});
  Representative.hasMany(XML, { as: "representante_XML", foreignKey: "codigo_representante"}); 
  XML.belongsTo(Services,{ as: "XML_servicio", foreignKey: "codigo_servicio"});
  Services.hasMany(XML, { as: "servicio_XML", foreignKey: "codigo_servicio"}); 
  XML.belongsTo(Schools,{ as: "XML_colegio", foreignKey: "codigo_colegio"});
  Schools.hasMany(XML, { as: "colegio_XML", foreignKey: "codigo_colegio"});

  Consecutivo

};

module.exports = initModels;

