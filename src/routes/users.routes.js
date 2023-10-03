const { Router } = require('express');
const { getAllUsers,getUser, createUser, updateUser, deleteUser }  = require ('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.get('/', getAllUsers);
router.get('/:user_id', getUser);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);


module.exports = router;