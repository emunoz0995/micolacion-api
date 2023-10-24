const { Router } = require('express');
const { getServicesReceivable,getServicesGenerateXML,getHistory,getClient}  = require ('../controllers/facturation.controller');
const { generateXML} = require('../controllers/generateXML');
const router = Router();

router.get('/services_receivable/:school_id', getServicesReceivable);
router.get('/services_generateXML/:school_id', getServicesGenerateXML);
router.get('/history/:client_ci', getHistory);
router.get('/client/:client_ci', getClient);
router.get('/generateXML', generateXML);
// router.get('/reportBreakFast/:school_id', getReportBreakFast);
// router.get('/reportLunches/:school_id', getReportLunches);

module.exports = router;