const {Router} = require('express');
const { getLunchInicial,getLunchPrimaria,getLunchSecundaria,
        getLunchEventuales,getLunchProcesados}  = require ('../../controllers/cervantes/almuerzos.controller');

const router = Router();
router.get('/lunch_inicial/:school_id', getLunchInicial);
router.get('/lunch_primaria/:school_id', getLunchPrimaria);
router.get('/lunch_secundaria/:school_id', getLunchSecundaria);
router.get('/lunch_eventuales/:school_id', getLunchEventuales);
router.get('/lunch_procesados/:school_id', getLunchProcesados);


module.exports = router;