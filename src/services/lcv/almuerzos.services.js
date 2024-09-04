const Clients = require('../../models/clients.model');
const Section = require('../../models/sections.model');
const Services = require('../../models/services.model')

class AlmuerzosService {
    static async getLunchBm(school_id) {
        try {
            const result = await Clients.findAll({
                where: { sectionId: 3, schoolId: school_id, statusLunch: false },
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
                    where: { isLunch: true}
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
                    where: { isLunch: true}
                }]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getLunchBEBySection(school_id,sectionId) {
        try {
            const result = await Clients.findAll({
                where: { sectionId, schoolId: school_id, statusLunch: false },
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
                    where: { isLunch: true}
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
                where: { sectionId: 4,  schoolId: school_id, statusLunch: false },
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
                    where: { isLunch: true}
                }]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async getLunch2do3ro(school_id) {
        try {
            const result = await Clients.findAll({
                where: { sectionId: 9, schoolId: school_id, statusLunch: false },
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
                    where: { isLunch: true}
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
                where: { sectionId: [1,2,3,4,9], schoolId: school_id, serviceId: 48, statusLunch: false },
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
                    where: {
                        [Op.or]: [
                          {
                            [Op.and]: [
                              { isLunch: false },
                              { isBreakFast: true }
                            ]
                          },
                          { noneService: true }
                        ]
                      }
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