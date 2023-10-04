const RefrigeriosProcessService = require('../services/procedures.services');
const Utils = require('../utils/Utils');


const decrementBreakFast = async (req, res) => {
    try {
        const ci = req.params.client_ci;
        const result = await RefrigeriosProcessService.decrementBreakFast(ci);
        console.log(result)
        res.status(200).json({message: 'breakfast delivered successfully'});
    } catch (error) {
        res.status(400).json(error.message);
    }
}
const incrementBreakFast = async (req, res) => {
    try {
        const ci = req.params.client_ci;
        const result = await RefrigeriosProcessService.incrementBreakFast(ci);
        console.log(result)
        res.status(200).json({message: 'breakfast delivered successfully'});
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
        console.log(result)
        res.status(200).json({message: 'Lunch delivered successfully'});
    } catch (error) {
        res.status(400).json(error.message);
    }
}
const incrementLunch = async (req, res) => {
    try {
        const ci = req.params.client_ci;
        const result = await RefrigeriosProcessService.incrementLunch(ci);
        console.log(result)
        res.status(200).json({message: 'Lunch delivered successfully'});
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

const renewService = async (req, res) => {
    try {
        const ci = req.params.client_ci;
        const data = req.body
        console.log(ci, data)
        const result = await RefrigeriosProcessService.renewService(ci,data);
        res.status(200).json({message: 'service renew successfully'});
    } catch (error) {
        res.status(400).json(error.message);
    }
}


module.exports = {
    decrementBreakFast,
    incrementBreakFast,
    revertBreakFast,
    decrementLunch,
    incrementLunch,
    revertLunch,
    renewService
}