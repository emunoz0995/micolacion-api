const { Op, Sequelize } = require('sequelize');
const Clients = require('../../models/clients.model');
const Section = require('../../models/sections.model');
const Services = require('../../models/services.model');
const History = require('../../models/historical.model');

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
                    where: { isBreakFast: true }
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
                    where: { isBreakFast: true }
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
                    where: { isBreakFast: true }

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
                where: { sectionId: [2, 5, 6, 7], schoolId: school_id, statusBreakfast: false },
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
                                    { isLunch: true },
                                    { isBreakFast: false }
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

    static async getBreakFastProcesados(school_id) {
        try {
            const result = await History.findAll({
                where: {
                    paidService: false,
                    schoolId: school_id,
                    createdAt: {
                        [Sequelize.Op.gte]: Sequelize.fn('DATE', Sequelize.fn('NOW'))
                    }
                },
                attributes: ['id', 'cedulaCliente', 'lastName', 'firstName', 'paidService', 'totalBreakfast'],
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
                    attributes: ['name', 'isBreakFast', 'noneService'],
                }]
            });
            return result;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

}

module.exports = RefrigeriosService;