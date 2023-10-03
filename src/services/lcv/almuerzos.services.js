const Clients = require('../../models/clients.model');
const Section = require('../../models/sections.model');
const Services = require('../../models/services.model')

class AlmuerzosService {
    static async getLunchBm(school_id) {
        try {
            const result = await Clients.findAll({
                where: { sectionId: 3, schoolId: school_id, statusLunch: false },
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
    static async getLunchBE(school_id) {
        try {
            const result = await Clients.findAll({
                where: { sectionId:[1,2], schoolId: school_id, statusLunch: false },
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
    static async getLunchBS(school_id) {
        try {
            const result = await Clients.findAll({
                where: { sectionId: 4, schoolId: school_id, statusLunch: false },
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
                where: { sectionId: [1,2,3,4], schoolId: school_id, serviceId: 41, statusLunch: false },
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
    static async getLunchPersonal(school_id) {
        try {
            const result = await Clients.findAll({
                where: { sectionId: [8,9], schoolId: school_id, statusLunch: false },
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