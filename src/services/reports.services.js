const Clients = require('../models/clients.model');
const Section = require('../models/sections.model');
const Services = require('../models/services.model');
const Representative = require('../models/representative.model');
const History = require('../models/historical.model');
const { Op } = require('sequelize');

class ReportService {
    static async getReportGeneral(school_id) {
        try {
            const result = await Clients.findAll({
                where: { schoolId: school_id, sectionId:[1,2,3,4,5,6,7] },
                include: [{
                    model: Section,
                    as: 'cliente_seccion',
                    attributes: ['name'],
                }, {
                    model: Services,
                    as: 'cliente_servicio',
                    attributes: ['name'],
                },{
                    model: Representative,
                    as: 'cliente_representante',
                }]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getReportMenorFive(school_id) {
        try {
            const result = await Clients.findAll({
                where: { schoolId: school_id, 
                         sectionId:[1,2,3,4,5,6,7],
                         serviceId: {[Op.ne]: 48},
                         totalBreakfast: { [Op.lte]: 5 },
                         totalLunch: { [Op.lte]: 5 },        
                        },
                order: [['lastName', 'ASC']],
                include: [{
                    model: Section,
                    as: 'cliente_seccion',
                    attributes: ['name'],
                }, {
                    model: Services,
                    as: 'cliente_servicio',
                    attributes: ['name'],
                },{
                    model: Representative,
                    as: 'cliente_representante',
                }]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getReportBreakFast(school_id) {
        try {
            const result = await Clients.findAll({
                where: { schoolId: school_id, 
                         sectionId:[1,2,3,4,5,6,7],
                         statusBreakfast: true
                        },
                include: [{
                    model: Section,
                    as: 'cliente_seccion',
                    attributes: ['name'],
                }, {
                    model: Services,
                    as: 'cliente_servicio',
                    attributes: ['name'],
                },{
                    model: Representative,
                    as: 'cliente_representante',
                }]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getReportLunches(school_id) {
        try {
            const result = await Clients.findAll({
                where: { schoolId: school_id, 
                         sectionId:[1,2,3,4,5,6,7],
                         statusLunch: true
                        },
                include: [{
                    model: Section,
                    as: 'cliente_seccion',
                    attributes: ['name'],
                }, {
                    model: Services,
                    as: 'cliente_servicio',
                    attributes: ['name'],
                },{
                    model: Representative,
                    as: 'cliente_representante',
                }]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }    

    static async getReportHistory(school_id) {
        try {
            const result = await History.findAll({
                where: { schoolId: school_id},
                order: [
                    ['lastName', 'ASC'],
                ],
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

    static async getReportHistoryByClient(client_ci) {
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

module.exports = ReportService;