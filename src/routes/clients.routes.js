const { Router } = require('express');
const { getAllClients,getClient, createClient, createClientForUser, updateClient, deleteClient }  = require ('../controllers/clients.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.get('/:school_id', getAllClients);
router.get('/client/:client_id', getClient);
router.post('/clientForUser', createClientForUser);
router.post('/client', createClient);
router.put('/client/:id', updateClient);
router.delete('/client/:id', deleteClient);


module.exports = router;