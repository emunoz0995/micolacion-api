const { Router } = require('express');
const { getAllSchools,getSchool, createSchool, updateSchool, deleteSchool }  = require ('../controllers/schools.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.get('/', getAllSchools);
router.get('/:school_id', getSchool);
router.post('/school', createSchool);
router.put('/school/:id', updateSchool);
router.delete('/school/:id', deleteSchool);


module.exports = router;