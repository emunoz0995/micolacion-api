const { Op } = require('sequelize');
const Clients = require('../../models/clients.model');
const Section = require('../../models/sections.model');
const Services = require('../../models/services.model')

class AlmuerzosService {
    static async getLunchInicial(school_id) {
        try {
            const result = await Clients.findAll({
                where: { sectionId: 5, schoolId: school_id, statusLunch: false },
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
    static async getLunchPrimaria(school_id) {
        try {
            const result = await Clients.findAll({
                where: { sectionId:2, schoolId: school_id, statusLunch: false },
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
    static async getLunchSecundaria(school_id) {
        try {
            const result = await Clients.findAll({
                where: { sectionId: 6, schoolId: school_id, statusLunch: false },
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
                where: { sectionId: [2,5,6,7], schoolId: school_id, statusLunch: false },
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
    static async getLunchProcesados(school_id) {
        try {
            const result = await Clients.findAll({
                where: { statusLunch: true, schoolId: school_id },
                attributes:['id','cedulaCliente','lastName','firstName','paidService','totalBreakfast'],
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
                    attributes: ['name','isLunch','noneService' ],
                }]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = AlmuerzosService;