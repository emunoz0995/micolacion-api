const History = require('../models/historical.model');
const Section = require('../models/sections.model');
const Services = require('../models/services.model');
const Clients = require('../models/clients.model');
const Representative = require('../models/representative.model');
const XML = require('../models/generateXML.model');
const { Op } = require('sequelize');

class FacturationService {
    static async getServicesReceivable(school_id) {
        try {
            const result = await History.findAll({
                where: { schoolId: school_id, paidService: false },
                include: [{
                    model: Section,
                    as: 'history_seccion',
                    attributes: ['name'],
                }, {
                    model: Services,
                    as: 'history_servicio',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    }

                }, {
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
            const result = await Representative.findAll({
                include: [{
                    model: Clients,
                    as: 'representante_cliente',
                    include: [{
                        model: Services,
                    as: 'cliente_servicio',
                    attributes:['name','price']
                    }],
                    where: { schoolId: school_id },
                }],
                where: { generateXML: true },
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getServicesGenerateXMlByClient(ci) {
        try {
            const result = await XML.findAll({
                where: { representativeId: ci },
                include: [{
                    model: Section,
                    as: 'XML_seccion',
                    attributes: ['name'],
                }, {
                    model: Services,
                    as: 'XML_servicio',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    }
                }, {
                    model: Representative,
                    as: 'XML_representante',
                }]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getHistory(client_ci) {
        try {
            const result = await History.findAll({
                where: { cedulaCliente: client_ci },
                include: [{
                    model: Section,
                    as: 'history_seccion',
                    attributes: ['name'],
                }, {
                    model: Services,
                    as: 'history_servicio',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    }

                }, {
                    model: Representative,
                    as: 'history_representante',
                }]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async getClientByCi(cedulaCliente) {
        try {
            const result = await Clients.findOne({
                where: { cedulaCliente },
                include: [{
                    model: Representative,
                    as: 'cliente_representante',
                }, {
                    model: Section,
                    as: 'cliente_seccion',
                    attributes: ['name'],
                }, {
                    model: Services,
                    as: 'cliente_servicio',
                    attributes: ['name'],
                }]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = FacturationService;