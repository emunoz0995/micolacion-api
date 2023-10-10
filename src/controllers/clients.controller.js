const ClientService = require('../services/clients.services');
const Utils = require('../utils/Utils');

const getAllClients = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await ClientService.getAll(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getClient = async (req, res) => {
    try {
        const client_id = req.params.client_id;
        const result = await ClientService.getClientById(client_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const createClient = async (req, res) => {
    try {
        const client = req.body;
        const result = await ClientService.createClient(client);
        res.status(201).json({ message: 'resource created successfully' });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const createClientForUser = async (req, res) => {
    try {
        const client = req.body;
        const result = await ClientService.createClientForUser(client);
        res.status(201).json({ message: 'resource created successfully' });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const updateClient = async (req, res) => {
    try {
        const { id } = req.params;
        const client = req.body;
        const result = await ClientService.updateClient(client, {
            where: { id },
        });
        console.log(result)
        res.status(200).json({message: 'resource updated successfully'});
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const deleteClient = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await ClientService.delete({
            where: { id }
        });
        res.status(200).json({message:'resource deleted successfully'})
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllClients,
    getClient,
    createClient,
    createClientForUser,
    updateClient,
    deleteClient,
}