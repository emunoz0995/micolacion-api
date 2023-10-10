const FacturationService = require('../services/facturation.services');
const xmlbuilder = require('xmlbuilder');
const fs = require('fs');
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


module.exports = {
    getServicesReceivable,
    getServicesGenerateXML,
}