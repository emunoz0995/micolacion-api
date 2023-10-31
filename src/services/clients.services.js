const Clients = require('../models/clients.model');
const Section = require('../models/sections.model');
const Services = require('../models/services.model')
const Representative = require('../models/representative.model');
const Utils = require('../utils/Utils');

class ClientService {
    static async getAll(school_id) {
        try {
            const result = await Clients.findAll({
                where: { schoolId: school_id },
                order: [
                    ['lastName', 'ASC'],
                ],
                include: [{
                    model: Representative,
                    as: 'cliente_representante',
                },{
                    model: Section,
                    as: 'cliente_seccion',
                    attributes: ['name'],
                },{
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

    static async getClientById(id) {
        try {
            const result = await Clients.findOne({
                where: { id },
                include: [{
                    model: Representative,
                    as: 'cliente_representante',
                },{
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

    static async getRepresentante(id) {
        try {
            const result = await Representative.findOne({
                where: { id }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async createClient(client) {
        try {
            const { names, cedulaRepresentante, email,
                adress, telefon, cedulaCliente, firstName,
                lastName, sectionId, serviceId, totalBreakfast, totalLunch, active } = client;
            const schoolId = Utils.decode(client.schoolId);
            const searchRepresentante = await Representative.findOne({ where: { cedulaRepresentante } });

            if (searchRepresentante) {
                const result = await Clients.create({
                    cedulaCliente, firstName,
                    lastName, sectionId, representativeId: searchRepresentante.id, schoolId, serviceId, totalBreakfast, totalLunch, active
                });
                return result;
            } else {
                await Representative.create({ names, cedulaRepresentante, email, adress, telefon });
                const utimateRegister = await Representative.findOne({ order: [['createdAt', 'DESC']] });
                const result = await Clients.create({
                    cedulaCliente, firstName,
                    lastName, sectionId, representativeId: utimateRegister.id, schoolId, serviceId, totalBreakfast, totalLunch, active
                });
                return result;
            }
        } catch (error) {
            throw error;

        }
    }

    static async createClientForUser(client) {
        try {
            const { names, cedulaRepresentante, email,
                adress, telefon, cedulaCliente, firstName,
                lastName, sectionId, readPolitics } = client;
            const schoolId = Utils.decode(client.schoolId);
            const searchRepresentante = await Representative.findOne({ where: { cedulaRepresentante } });

            if (searchRepresentante) {
                const result = await Clients.create({
                    cedulaCliente, firstName,
                    lastName, sectionId, representativeId: searchRepresentante.id, schoolId, serviceId: 41, readPolitics
                });
                return result;
            } else {
                await Representative.create({ names, cedulaRepresentante, email, adress, telefon });
                const utimateRegister = await Representative.findOne({ order: [['createdAt', 'DESC']] });
                const result = await Clients.create({
                    cedulaCliente, firstName,
                    lastName, sectionId, representativeId: utimateRegister.id, schoolId, serviceId: 41, readPolitics
                });
                return result;
            }
        } catch (error) {
            throw error;

        }
    }

    static async updateClient(client, id) {
        try {
            const { names, cedulaRepresentante, email,
                adress, telefon, cedulaCliente, firstName,
                lastName, sectionId, serviceId, totalBreakfast, totalLunch, active } = client;
            const searchRepresentante = await Representative.findOne({ where: { cedulaRepresentante } });

            await Representative.update({ names, cedulaRepresentante, email, adress, telefon },
                { where: { id: searchRepresentante.id } });
                
            const result = await Clients.update({
                cedulaCliente, firstName, lastName, sectionId, serviceId, totalBreakfast, totalLunch, active
            }, id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const result = await Clients.destroy(id);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ClientService;