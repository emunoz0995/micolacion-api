const {Router} = require('express');
const { getBreakFastBm,getBreakFastBE,getBreakFastBS,
        getBreakFastEventuales,getBreakFastPersonal,getBreakFastProcesados}  = require ('../../controllers/lcv/refrigerios.controller');

const router = Router();
router.get('/breakfast_bm/:school_id', getBreakFastBm);
router.get('/breakfast_be/:school_id', getBreakFastBE);
router.get('/breakfast_bs/:school_id', getBreakFastBS);
router.get('/breakfast_eventuales/:school_id', getBreakFastEventuales);
router.get('/breakfast_personal/:school_id', getBreakFastPersonal);
router.get('/breakfast_procesados/:school_id', getBreakFastProcesados);


module.exports = router;