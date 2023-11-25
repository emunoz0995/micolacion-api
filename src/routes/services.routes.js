const { Router } = require('express');
const { getAllServices, getServicesBySchool, getServicesExtras,  getService, createService, updateService, deleteService, deleteServiceByStudent }  = require ('../controllers/services.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.get('/', getAllServices);
router.get('/:school_id', getServicesBySchool);
router.get('/service/extras', getServicesExtras);
router.get('/service/:service_id', getService);
router.post('/service', createService);
router.put('/service/:id', updateService);
router.delete('/service/:id', deleteService);
router.delete('/servicesByStudent/:id', deleteServiceByStudent);


module.exports = router;