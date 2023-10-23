const authRoutes = require("./auth.routes");
const userRoutes = require('./users.routes');
const clientRoutes = require('./clients.routes');
const serviceRoutes = require('./services.routes');
const schoolRoutes = require('./schools.routes');
const sectionRoutes = require('./sections.routes');
const breakLcvRoutes = require('./lcv/refrigerios.routes');
const lunchLcvRoutes = require('./lcv/almuerzos.routes');
const breakCervantesRoutes = require('./cervantes/refrigerios.routes');
const lunchCervantesRoutes = require('./cervantes/almuerzos.routes');
const proceduresRoutes = require('./procedures.routes');
const reportsRoutes = require('./reports.routes');
const facturationRoutes = require('./facturation.routes');
// const orderRoutes = require('./order.routes')

const routerApi = (app) => {

    app.use("/api/users", authRoutes);
    app.use("/api/users", userRoutes);
    app.use("/api/clients", clientRoutes);
    app.use("/api/services", serviceRoutes)
    app.use("/api/schools", schoolRoutes);
    app.use("/api/sections", sectionRoutes);
    app.use("/api/reports",reportsRoutes)
    app.use("/api/refrigerios_lcv", breakLcvRoutes);
    app.use("/api/almuerzos_lcv",lunchLcvRoutes)
    app.use("/api/refrigerios_cervantes", breakCervantesRoutes);
    app.use("/api/almuerzos_cervantes",lunchCervantesRoutes)
    app.use("/api/procedures", proceduresRoutes);
    app.use("/api/facturations", facturationRoutes)
    
  };
  
  module.exports = routerApi;