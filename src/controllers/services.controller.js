const ServicesService = require('../services/service.services');
const StudentServiceService = require('../services/studentServices.services');
const Utils = require('../utils/Utils');

const getAllServices = async (req, res) => {
    try {
        const result = await ServicesService.getAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getServicesBySchool = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await ServicesService.getServicesBySchool(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getServicesExtras = async (req, res) => {
    try {
        const result = await ServicesService.getServicesExtras();(result)
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getService = async (req, res) => {
    try {
        const { service_id } = req.params;
        const result = await ServicesService.getServiceById(service_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const createService = async (req, res) => {
    try {
        const service = req.body;
        const result = await ServicesService.createService(service);
        res.status(201).json({ message: 'resource created successfully' });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const updateService = async (req, res) => {
    try {
        const { id } = req.params;
        const service = req.body;
        const result = await ServicesService.updateService(service, {
            where: { id },
        });
        res.status(200).json({message: 'resource updated successfully'});
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const deleteService = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await ServicesService.delete({
            where: { id }
        });
        res.status(200).json({message:'resource deleted successfully'})
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const deleteServiceByStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await StudentServiceService.deleteServiceByStudent({
            where: { id }
        });
        res.status(200).json({message:'resource deleted successfully'})
    } catch (error) {
        res.status(400).json(error.message);
    }
}


module.exports = {
    getAllServices,
    getServicesBySchool,
    getServicesExtras,
    getService,
    createService,
    updateService,
    deleteService,
    deleteServiceByStudent
    
}