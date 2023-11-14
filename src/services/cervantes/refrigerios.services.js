const Clients = require('../../models/clients.model');
const Section = require('../../models/sections.model');
const Services = require('../../models/services.model')

class RefrigeriosService {
    static async getBreakFastInicial(school_id) {
        try {
            const result = await Clients.findAll({
                where: { sectionId: 5, schoolId: school_id, serviceId:[2,16,34,38,39,42,45], statusBreakfast: false },
                order: [
                    ['lastName', 'ASC'],
                ],
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
    static async getBreakFastPrimaria(school_id) {
        try {
            const result = await Clients.findAll({
                where: { sectionId: 2, schoolId: school_id, serviceId:[2,16,34,38,39,42,45], statusBreakfast: false },
                order: [
                    ['lastName', 'ASC'],
                ],
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
    static async getBreakFastSecundaria(school_id) {
        try {
            const result = await Clients.findAll({
                where: { sectionId: 6, schoolId: school_id, serviceId:[2,4,16,34,38,39,42,46,45], statusBreakfast: false },
                order: [
                    ['lastName', 'ASC'],
                ],
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
                where: { sectionId: [2,5,6,7], schoolId: school_id, serviceId: [48,30,31], statusBreakfast: false },
                order: [
                    ['lastName', 'ASC'],
                ],
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
                order: [
                    ['lastName', 'ASC'],
                ],
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