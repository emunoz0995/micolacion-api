const AlmuerzosService = require('../../services/lcv/almuerzos.services');
const Utils = require('../../utils/Utils');

const getLunchBm = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await AlmuerzosService.getLunchBm(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const getLunchBE = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await AlmuerzosService.getLunchBE(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const getLunchBS = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await AlmuerzosService.getLunchBS(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const getLunchEventuales = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await AlmuerzosService.getLunchEventuales(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const getLunchPersonal = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await AlmuerzosService.getLunchPersonal(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const getLunchProcesados = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await AlmuerzosService.getLunchProcesados(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}


module.exports = {
    getLunchBm,
    getLunchBE,
    getLunchBS,
    getLunchEventuales,
    getLunchPersonal,
    getLunchProcesados,
}