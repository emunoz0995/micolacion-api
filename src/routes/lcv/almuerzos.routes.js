const {Router} = require('express');
const { getLunchBm,getLunchBE,getLunchBySection,getLunchBS,getLunch2do3ro,
        getLunchEventuales,getLunchPersonal,getLunchProcesados}  = require ('../../controllers/lcv/almuerzos.controller');

const router = Router();
router.get('/lunch_bm/:school_id', getLunchBm);
router.get('/lunch_be/:school_id', getLunchBE);
router.get('/lunch_be/:school_id/section/:section_id', getLunchBySection);
router.get('/lunch_bs/:school_id', getLunchBS);
router.get('/lunch_2do_3ro/:school_id', getLunch2do3ro);
router.get('/lunch_eventuales/:school_id', getLunchEventuales);
router.get('/lunch_personal/:school_id', getLunchPersonal);
router.get('/lunch_procesados/:school_id', getLunchProcesados);


module.exports = router;