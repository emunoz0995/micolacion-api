const {Router} = require('express');
const { getBreakFastBm,getBreakFastBE,getBreakFastBySection,getBreakFastBS,getBreakFast2do3ro,
        getBreakFastEventuales,getBreakFastPersonal,getBreakFastProcesados}  = require ('../../controllers/lcv/refrigerios.controller');

const router = Router();
router.get('/breakfast_bm/:school_id', getBreakFastBm);
router.get('/breakfast_be/:school_id', getBreakFastBE);
router.get('/breakfast_be/:school_id/section/:section_id', getBreakFastBySection);
router.get('/breakfast_2do_3ro/:school_id', getBreakFast2do3ro);
router.get('/breakfast_bs/:school_id', getBreakFastBS);
router.get('/breakfast_eventuales/:school_id', getBreakFastEventuales);
router.get('/breakfast_personal/:school_id', getBreakFastPersonal);
router.get('/breakfast_procesados/:school_id', getBreakFastProcesados);


module.exports = router;