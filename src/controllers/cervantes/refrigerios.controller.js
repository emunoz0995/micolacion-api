const RefrigeriosService = require('../../services/cervantes/refrigerios.services');
const Utils = require('../../utils/Utils');

const getBreakFastInicial = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await RefrigeriosService.getBreakFastInicial(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const getBreakFastPrimaria = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await RefrigeriosService.getBreakFastPrimaria(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const getBreakFastSecundaria = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await RefrigeriosService.getBreakFastSecundaria(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const getBreakFastEventuales = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await RefrigeriosService.getBreakFastEventuales(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const getBreakFastProcesados = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await RefrigeriosService.getBreakFastProcesados(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}


module.exports = {
    getBreakFastInicial,
    getBreakFastPrimaria,
    getBreakFastSecundaria,
    getBreakFastEventuales,
    getBreakFastProcesados,
}