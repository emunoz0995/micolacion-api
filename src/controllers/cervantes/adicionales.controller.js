const AditionalService = require('../../services/cervantes/adicionales.services');
const StudentServices = require('../../models/studentServices.model');
const Utils = require('../../utils/Utils');

const getAditionalServices = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await AditionalService.getAditionalServices(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getServicesAditionalById = async (req, res) => {
    try {
        const serviceId = req.params.service_id;
        const result = await AditionalService.getServicesAditionalById(serviceId);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getServicesAditionalProcessById = async (req, res) => {
    try {
        const serviceId = req.params.service_id;
        const result = await AditionalService.getServicesAditionalProcessById(serviceId);
        const countProcess = await StudentServices.count({where: {serviceId}});
        res.status(200).json({result, countProcess});
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getAditionalServicesProcess = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await AditionalService.getAditionalServicesProcess(school_id);
        const countProcess = await StudentServices.count({where: { statusAditional: true, schoolId: school_id }});
        res.status(200).json({result, countProcess});
    } catch (error) {
        res.status(400).json(error.message)
    }
}


module.exports = {
    getAditionalServices,
    getServicesAditionalById,
    getServicesAditionalProcessById,
    getAditionalServicesProcess,
}