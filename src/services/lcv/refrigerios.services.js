const Clients = require('../../models/clients.model');
const Section = require('../../models/sections.model');
const Services = require('../../models/services.model')

class RefrigeriosService {
    static async getBreakFastBm(school_id) {
        try {
            const result = await Clients.findAll({
                where: { sectionId: 3, schoolId: school_id, statusBreakfast: false },
                include: [{
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
    static async getBreakFastBE(school_id) {
        try {
            const result = await Clients.findAll({
                where: { sectionId:[1,2], schoolId: school_id, statusBreakfast: false },
                include: [{
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
    static async getBreakFastBS(school_id) {
        try {
            const result = await Clients.findAll({
                where: { sectionId: 4, schoolId: school_id, statusBreakfast: false },
                include: [{
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
    static async getBreakFastEventuales(school_id) {
        try {
            const result = await Clients.findAll({
                where: { sectionId: [1,2,3,4], schoolId: school_id, serviceId: 41, statusBreakfast: false },
                include: [{
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
    static async getBreakFastPersonal(school_id) {
        try {
            const result = await Clients.findAll({
                where: { sectionId: [8,9], schoolId: school_id, statusBreakfast: false },
                include: [{
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
    static async getBreakFastProcesados(school_id) {
        try {
            const result = await Clients.findAll({
                where: { statusBreakfast: true, schoolId: school_id },
                include: [{
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

module.exports = RefrigeriosService;