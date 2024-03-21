const { Router } = require('express');
const { getRepresentative }  = require ('../controllers/representative.controller');

const router = Router();
router.get('/representative/:representative_id', getRepresentative);



module.exports = router;