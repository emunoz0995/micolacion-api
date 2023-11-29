const { Router } = require('express');
const { getServicesReceivable,getServicesGenerateXML, getServicesGenerateXMlByClient, getHistory,getClient}  = require ('../controllers/facturation.controller');
const { generateXML} = require('../controllers/generateXML');
const { xmlGenerado } = require('../middlewares/afterXML.middleware');
const { asegurarConsecutivo } = require('../middlewares/consecutivo.middleware');
const router = Router();

router.get('/services_receivable/:school_id', getServicesReceivable);
router.get('/services_generateXML/:school_id', getServicesGenerateXML);
router.get('/services_generateXMLByClient/:client_ci', getServicesGenerateXMlByClient);
router.get('/client/:client_ci', getClient);
router.post('/generateXML', asegurarConsecutivo, generateXML, xmlGenerado);
// router.get('/reportBreakFast/:school_id', getReportBreakFast);
// router.get('/reportLunches/:school_id', getReportLunches);

module.exports = router;