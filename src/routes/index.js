const authRoutes = require("./auth.routes");
const userRoutes = require('./users.routes');
const clientRoutes = require('./clients.routes');
const serviceRoutes = require('./services.routes');
const schoolRoutes = require('./schools.routes');
const sectionRoutes = require('./sections.routes');
const breakLcvRoutes = require('./lcv/refrigerios.routes');
const lunchLcvRoutes = require('./lcv/almuerzos.routes');
const proceduresRoutes = require('./procedures.routes');
const reportsRoutes = require('./reports.routes');
const facturationRoutes = require('./facturation.routes');
// const orderRoutes = require('./order.routes')

const routerApi = (app) => {

    app.use("/users", authRoutes);
    app.use("/users", userRoutes);
    app.use("/clients", clientRoutes);
    app.use("/services", serviceRoutes)
    app.use("/schools", schoolRoutes);
    app.use("/sections", sectionRoutes);
    app.use("/reports",reportsRoutes)
    app.use("/refrigerios_lcv", breakLcvRoutes);
    app.use("/almuerzos_lcv",lunchLcvRoutes)
    app.use("/procedures", proceduresRoutes);
    app.use("/facturations", facturationRoutes)

    // app.use("/api/v1", producRoutes);
    // app.use("/api/v1", cartRoutes);
    // app.use("/api/v1", orderRoutes);

  };
  
  module.exports = routerApi;