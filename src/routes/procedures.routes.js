const {Router} = require('express');
const {decrementBreakFast, incrementBreakFast,revertBreakFast,
        decrementLunch,incrementLunch,revertLunch}  = require ('../controllers/procedures.controller');

const router = Router();

router.put('/decrement_breackfast/:client_ci', decrementBreakFast);
router.put('/increment_breackfast/:client_ci', incrementBreakFast);
router.put('/revert_breackfast/:client_ci', revertBreakFast);

router.put('/decrement_lunch/:client_ci', decrementLunch);
router.put('/increment_lunch/:client_ci', incrementLunch);
router.put('/revert_lunch/:client_ci', revertLunch);


module.exports = router;