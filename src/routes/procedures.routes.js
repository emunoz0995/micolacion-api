const {Router} = require('express');
const {decrementBreakFast, incrementBreakFast,revertBreakFast,
        decrementLunch,incrementLunch,revertLunch, registerExtra, registerAditional, renewService,
        decrementAdicional,revertAdicional,paidService, paidServiceProcessed, startDay, 
        getCountAdicionalProcesados, getCountBreakFastProcesados, getCountLuchProcesados}  = require ('../controllers/procedures.controller');
const { historyBreakFast, historyDecrementBreakFast, historyLuch, historyDecrementLuch, historyAditionalService } = require('../middlewares/registerHistory.middleware')
const { xmlRenewServices, xmlPaidServices, xmlPaidServicesProcessed } = require('../middlewares/registerXML.middleware');

const router = Router();

router.put('/decrement_breackfast/:client_ci', decrementBreakFast, historyDecrementBreakFast);
router.put('/increment_breackfast/:client_ci', incrementBreakFast, historyBreakFast);
router.put('/revert_breackfast/:client_ci', revertBreakFast);

router.put('/decrement_lunch/:client_ci', decrementLunch, historyDecrementLuch);
router.put('/increment_lunch/:client_ci', incrementLunch, historyLuch);
router.put('/revert_lunch/:client_ci', revertLunch);

router.put('/decrement_adicional/:id', decrementAdicional,historyAditionalService);
router.put('/revert_adicional/:id', revertAdicional);

router.get('/countBreakfast_procesados/:school_id', getCountBreakFastProcesados); 
router.get('/countLuch_procesados/:school_id', getCountLuchProcesados);
router.get('/countAdicional_procesados/:school_id', getCountAdicionalProcesados);

router.put('/start_day/:school_id', startDay);
router.post('/register_serviceExtra', registerExtra);
router.post('/register_serviceAditional', registerAditional);

router.put('/renew_service/:client_ci', renewService, xmlRenewServices);
router.put('/paid_service/:client_id', paidService, xmlPaidServices);
router.put('/paidServiceFromProcessed/:client_ci', paidServiceProcessed, xmlPaidServicesProcessed);


module.exports = router;