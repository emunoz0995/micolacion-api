const Clients = require('../../models/clients.model');
const Section = require('../../models/sections.model');
const Services = require('../../models/services.model')

class AlmuerzosService {
    static async getLunchInicial(school_id) {
        try {
            const result = await Clients.findAll({
                where: { sectionId: 5, schoolId: school_id, serviceId:[16,30,31,34,42,45], statusLunch: false },
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
    static async getLunchPrimaria(school_id) {
        try {
            const result = await Clients.findAll({
                where: { sectionId:2, schoolId: school_id, serviceId:[16,30,31,34,42,45], statusLunch: false },
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
    static async getLunchSecundaria(school_id) {
        try {
            const result = await Clients.findAll({
                where: { sectionId: 6, schoolId: school_id,serviceId:[16,30,31,34,42,45,46], statusLunch: false },
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
    static async getLunchEventuales(school_id) {
        try {
            const result = await Clients.findAll({
                where: { sectionId: [2,5,6,7], schoolId: school_id, serviceId: [2,38,39,48], statusLunch: false },
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
    static async getLunchProcesados(school_id) {
        try {
            const result = await Clients.findAll({
                where: { statusLunch: true, schoolId: school_id },
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

module.exports = AlmuerzosService;