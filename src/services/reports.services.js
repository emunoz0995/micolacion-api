const Clients = require('../models/clients.model');
const Section = require('../models/sections.model');
const Services = require('../models/services.model')
const Representative = require('../models/representative.model');

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
                         sectionId:[1,2,3,4,5,6,7] },
                         totalBreakfast: { [Op.lte]: 5 },
                         totalLunch: { [Op.lte]: 5 },
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

    static async getReportLunches(school_id) {
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

    static async getReportHistorical(school_id) {
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

    
}

module.exports = ReportService;