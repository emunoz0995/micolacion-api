const {Router} = require('express');
const {decrementBreakFast, incrementBreakFast,revertBreakFast,
        decrementLunch,incrementLunch,revertLunch, renewService,
        payBreakFast}  = require ('../controllers/procedures.controller');
const { historyBreakFast } = require('../middlewares/registerHistory.middleware')

const router = Router();

router.put('/decrement_breackfast/:client_ci', decrementBreakFast, historyBreakFast);
router.put('/increment_breackfast/:client_ci', incrementBreakFast);
router.put('/revert_breackfast/:client_ci', revertBreakFast);
router.put('/pay_breackfast/:client_ci', payBreakFast);

router.put('/decrement_lunch/:client_ci', decrementLunch);
router.put('/increment_lunch/:client_ci', incrementLunch);
router.put('/revert_lunch/:client_ci', revertLunch);

router.put('/renew_service/:client_ci', renewService);


module.exports = router;