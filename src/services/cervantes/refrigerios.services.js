const Clients = require('../../models/clients.model');
const Section = require('../../models/sections.model');
const Services = require('../../models/services.model')

class RefrigeriosService {
    static async getBreakFastInicial(school_id) {
        try {
            const result = await Clients.findAll({
                where: { sectionId: 5, schoolId: school_id, statusBreakfast: false },
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
                    where: { isBreakFast: true}
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
                where: { sectionId: 2, schoolId: school_id, statusBreakfast: false },
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
                    where: { isBreakFast: true}
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
                where: { sectionId: 6, schoolId: school_id, statusBreakfast: false },
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
                    where: { isBreakFast: true}

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
                where: { sectionId: [2,5,6,7], schoolId: school_id, statusBreakfast: false },
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
                    where: { isLunch: true, isBreakFast: false, id:48}
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