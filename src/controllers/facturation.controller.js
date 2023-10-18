const FacturationService = require('../services/facturation.services');
const Utils = require('../utils/Utils');

const getServicesReceivable = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await FacturationService.getServicesReceivable(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getServicesGenerateXML = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await FacturationService.getServicesGenerateXML(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getHistory = async (req, res) => {
    try {
        const client_ci = req.params.client_ci;
        const result = await FacturationService.getHistory(client_ci);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {
    getServicesReceivable,
    getServicesGenerateXML,
    getHistory,
}