const { Router } = require('express');
const { getReportGeneral,getReportMenorFive, getReportBreakFast, getReportLunches, getReportHistorical }  = require ('../controllers/reports.controller');

const router = Router();

router.get('/generalReport/:school_id', getReportGeneral);
router.get('/menorFiveReport/:school_id', getReportMenorFive);
router.get('/reportBreakFast/:school_id', getReportBreakFast);
router.get('/reportLunches/:school_id', getReportLunches);
router.get('/reportHistorical', getReportHistorical);


module.exports = router;