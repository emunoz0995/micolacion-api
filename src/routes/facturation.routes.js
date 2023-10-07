const { Router } = require('express');
const { getServicesReceivable,getServicesGenerateXML }  = require ('../controllers/facturation.controller');

const router = Router();

router.get('/services_receivable/:school_id', getServicesReceivable);
router.get('/services_generateXML', getServicesGenerateXML);
// router.get('/reportBreakFast/:school_id', getReportBreakFast);
// router.get('/reportLunches/:school_id', getReportLunches);

module.exports = router;