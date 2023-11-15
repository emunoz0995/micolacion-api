const RefrigeriosProcessService = require('../services/procedures.services');
const Clients = require('../models/clients.model');
const Utils = require('../utils/Utils');


const decrementBreakFast = async (req, res, next) => {
    try {
        const ci = req.params.client_ci;
        const result = await RefrigeriosProcessService.decrementBreakFast(ci);
        res.status(200).json({message: 'breakfast delivered successfully'});
        next();
    } catch (error) {
        res.status(400).json(error.message);
    }
}
const incrementBreakFast = async (req, res, next) => {
    try {
        const ci = req.params.client_ci;
        const result = await RefrigeriosProcessService.incrementBreakFast(ci);
        res.status(200).json({message: 'breakfast delivered successfully'});
        next();
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const revertBreakFast = async (req, res) => {
    try {
        const ci = req.params.client_ci;
        const result = await RefrigeriosProcessService.revertBreakFast(ci);
        res.status(200).json({message: 'breakfast revert successfully'});
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const decrementLunch = async (req, res) => {
    try {
        const ci = req.params.client_ci;
        const result = await RefrigeriosProcessService.decrementLunch(ci);
        res.status(200).json({message: 'Lunch delivered successfully'});
    } catch (error) {
        res.status(400).json(error.message);
    }
}
const incrementLunch = async (req, res, next) => {
    try {
        const ci = req.params.client_ci;
        const result = await RefrigeriosProcessService.incrementLunch(ci);
        res.status(200).json({message: 'Lunch delivered successfully'});
        next();
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const revertLunch = async (req, res) => {
    try {
        const ci = req.params.client_ci;
        const result = await RefrigeriosProcessService.revertLunch(ci);
        res.status(200).json({message: 'Lunch revert successfully'});
    } catch (error) {
        res.status(400).json(error.message);
    }
} 

const registerExtra = async (req, res) => {
    try {
        const data = req.body;
        const result = await RefrigeriosProcessService.registerExtra(data);
        res.status(200).json({message: 'extra register successfully'});
    } catch (error) {
        res.status(400).json(error.message);
    }
}


const renewService = async (req, res, next) => {
    try {
        const ci = req.params.client_ci;
        const data = req.body
        const result = await RefrigeriosProcessService.renewService(ci,data);
        res.status(200).json({message: 'service renew successfully'});
        setTimeout(() => {
            next();
        }, 1000); 
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const startDay = async (req, res) => {
    try {
        const schoolId = Utils.decode(req.params.school_id);
        const result = await RefrigeriosProcessService.startDay(schoolId);
        res.status(200).json({message: 'day restart successfully'});
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const paidService = async (req, res, next) => {
    try {
        const id = req.params.client_id;
        const result = await RefrigeriosProcessService.paidService(id);
        res.status(200).json({message: 'service paid successfully'});
        setTimeout(() => {
            next();
        }, 1000); 
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getCountBreakFastProcesados = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const countProcess = await Clients.count({where: { statusBreakfast: true, schoolId: school_id }});
        res.status(200).json(countProcess);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getCountLuchProcesados = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const countProcess = await Clients.count({where: { statusLunch: true, schoolId: school_id }});
        res.status(200).json(countProcess);
    } catch (error) {
        res.status(400).json(error.message);
    }
}



module.exports = {
    decrementBreakFast,
    incrementBreakFast,
    revertBreakFast,
    paidService,
    decrementLunch,
    incrementLunch,
    revertLunch,
    registerExtra,
    renewService,
    getCountBreakFastProcesados,
    getCountLuchProcesados,
    startDay
}