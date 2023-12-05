const { Router } = require('express');
const { getReportGeneral,getReportMenorFive, getReportBreakFast, getReportLunches,getReportHistory, getReportHistoryByClient }  = require ('../controllers/reports.controller');
const {generateExcelClients} = require ('../controllers/generateExcelClients');
const {generateExcelHistory} =require('../controllers/generateExcelHistory');
const { generateExcelMenor5 } = require('../controllers/generateExcelMenor5');
const { generateExcelGeneral} = require('../controllers/generateExcelGeneral');
const { generateExcelBreakFast} = require('../controllers/generateExcelBreakFast');
const { generateExcelLunches } = require('../controllers/generateExcelLunches');
const router = Router();

router.get('/generalReport/:school_id', getReportGeneral);
router.get('/menorFiveReport/:school_id', getReportMenorFive);
router.get('/reportBreakFast/:school_id', getReportBreakFast);
router.get('/reportLunches/:school_id', getReportLunches);
router.get('/reportHistory/:school_id', getReportHistory);
router.get('/reportHistoryByClient/:client_ci', getReportHistoryByClient);

router.get('/history/:school_id', generateExcelHistory);
router.get('/general/:school_id', generateExcelGeneral);
router.get('/breakfast/:school_id', generateExcelBreakFast);
router.get('/luches/:school_id', generateExcelLunches);
router.get('/clients/:school_id', generateExcelClients);
router.get('/reportMenorFive/:school_id', generateExcelMenor5);

module.exports = router;