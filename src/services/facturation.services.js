const History = require('../models/historical.model');
const Section = require('../models/sections.model');
const Services = require('../models/services.model')
const Representative = require('../models/representative.model');
const XML = require ('../models/generateXML.model');
const { Op } = require('sequelize');

class FacturationService {
    static async getServicesReceivable(school_id) {
        try {
            const result = await History.findAll({
                where: { schoolId: school_id, paidService: false},
                include: [{
                    model: Section,
                    as: 'history_seccion',
                    attributes: ['name'],
                }, {
                    model: Services,
                    as: 'history_servicio',
                    attributes: {
                        exclude: ['createdAt','updatedAt'],
                    }
                        
                },{
                    model: Representative,
                    as: 'history_representante',
                }]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getServicesGenerateXML(school_id) {
        try {
            const result = await XML.findAll({
                where: { schoolId: school_id, isGenerateXML: false},
                include: [{
                    model: Section,
                    as: 'XML_seccion',
                    attributes: ['name'],
                }, {
                    model: Services,
                    as: 'XML_servicio',
                    attributes: {
                        exclude: ['createdAt','updatedAt'],
                    }
                        
                },{
                    model: Representative,
                    as: 'XML_representante',
                }]
            });
            return result;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    static async getHistory(client_ci) {
        try {
            const result = await History.findAll({
                where: { cedulaCliente: client_ci},
                include: [{
                    model: Section,
                    as: 'history_seccion',
                    attributes: ['name'],
                }, {
                    model: Services,
                    as: 'history_servicio',
                    attributes: {
                        exclude: ['createdAt','updatedAt'],
                    }
                        
                },{
                    model: Representative,
                    as: 'history_representante',
                }]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = FacturationService;