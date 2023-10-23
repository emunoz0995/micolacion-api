const AlmuerzosService = require('../../services/cervantes/almuerzos.services');
const Utils = require('../../utils/Utils');

const getLunchInicial = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await AlmuerzosService.getLunchInicial(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const getLunchPrimaria = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await AlmuerzosService.getLunchPrimaria(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const getLunchSecundaria = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await AlmuerzosService.getLunchSecundaria(school_id);
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
    getLunchInicial,
    getLunchPrimaria,
    getLunchSecundaria,
    getLunchEventuales,
    getLunchProcesados,
}