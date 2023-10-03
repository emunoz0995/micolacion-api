const { Router } = require('express');
const { getAllSections,getSectionsBySchool,getSection, createSection, updateSection, deleteSection }  = require ('../controllers/sections.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.get('/', getAllSections);
router.get('/:school_id', getSectionsBySchool);
router.get('/section/:section_id', getSection);
router.post('/section', createSection);
router.put('/section/:id', updateSection);
router.delete('/section/:id', deleteSection);


module.exports = router;