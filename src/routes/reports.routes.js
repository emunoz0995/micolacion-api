const { Router } = require('express');
const { getReportGeneral,getReportMenorFive, getReportBreakFast, getReportLunches }  = require ('../controllers/reports.controller');
const {generateExcelClients} = require ('../controllers/generateExcelClients');
const router = Router();

router.get('/generalReport/:school_id', getReportGeneral);
router.get('/menorFiveReport/:school_id', getReportMenorFive);
router.get('/reportBreakFast/:school_id', getReportBreakFast);
router.get('/reportLunches/:school_id', getReportLunches);

router.get('/clients/:school_id', generateExcelClients);

module.exports = router;