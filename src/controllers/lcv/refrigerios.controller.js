const RefrigeriosService = require('../../services/lcv/refrigerios.services');
const Utils = require('../../utils/Utils');

const getBreakFastBm = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await RefrigeriosService.getBreakFastBm(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const getBreakFastBE = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await RefrigeriosService.getBreakFastBE(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const getBreakFastBS = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await RefrigeriosService.getBreakFastBS(school_id);
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
const getBreakFastPersonal = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await RefrigeriosService.getBreakFastPersonal(school_id);
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
    getBreakFastBm,
    getBreakFastBE,
    getBreakFastBS,
    getBreakFastEventuales,
    getBreakFastPersonal,
    getBreakFastProcesados,
}