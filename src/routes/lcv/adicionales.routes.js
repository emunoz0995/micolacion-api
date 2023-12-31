const {Router} = require('express');
const { getAditionalServices, getServicesAditionalById,getServicesAditionalProcessById, getAditionalServicesProcess}  = require ('../../controllers/lcv/adicionales.controller');

const router = Router();
router.get('/aditional_services_lcv/:school_id', getAditionalServices);
router.get('/aditionalServiceById/:service_id', getServicesAditionalById);
router.get('/aditionalServiceProcessById/:service_id', getServicesAditionalProcessById);
router.get('/aditional_servicesProcess/:school_id', getAditionalServicesProcess);

module.exports = router;