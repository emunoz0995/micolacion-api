const RefrigeriosService = require('../../services/lcv/refrigerios.services');
const Clients = require('../../models/clients.model');
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

const getBreakFastBySection = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const section_id = req.params.section_id;
        const result = await RefrigeriosService.getBreakFastBEBySection(school_id,section_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const getBreakFast2do3ro = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await RefrigeriosService.getBreakFast2do3ro(school_id);
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
        const countProcess = await Clients.count({where: { statusBreakfast: true, schoolId: school_id }});
        res.status(200).json({result, countProcess});
    } catch (error) {
        res.status(400).json(error.message)
    }
}


module.exports = {
    getBreakFastBm,
    getBreakFastBE,
    getBreakFastBySection,
    getBreakFastBS,
    getBreakFast2do3ro,
    getBreakFastEventuales,
    getBreakFastPersonal,
    getBreakFastProcesados,
}