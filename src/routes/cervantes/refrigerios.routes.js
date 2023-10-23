const {Router} = require('express');
const { getBreakFastInicial,getBreakFastPrimaria,getBreakFastSecundaria,
        getBreakFastEventuales,getBreakFastProcesados}  = require ('../../controllers/cervantes/refrigerios.controller');

const router = Router();
router.get('/breakfast_inicial/:school_id', getBreakFastInicial);
router.get('/breakfast_primaria/:school_id', getBreakFastPrimaria);
router.get('/breakfast_secundaria/:school_id', getBreakFastSecundaria);
router.get('/breakfast_eventuales/:school_id', getBreakFastEventuales);
router.get('/breakfast_procesados/:school_id', getBreakFastProcesados);


module.exports = router;