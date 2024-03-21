const Clients = require('../models/clients.model');
const Section = require('../models/sections.model');
const Services = require('../models/services.model')
const Representative = require('../models/representative.model');
const StudentServices = require('../models/studentServices.model');
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
                }, {
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

    static async getClientById(id) {
        try {
            const result = await Clients.findOne({
                where: { id },
                include: [{
                    model: Representative,
                    as: 'cliente_representante',
                }, {
                    model: Section,
                    as: 'cliente_seccion',
                    attributes: ['name'],
                }, {
                    model: Services,
                    as: 'cliente_servicio',
                    attributes: ['name'],
                } ]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async createClient(representante_id, client) {
        try {
            const schoolId = Utils.decode(client.schoolId);
            client.schoolId = schoolId
            if(representante_id) {
                client.representativeId = representante_id
            }
            const result = await Clients.create(client);
            return result;
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
            const result = await Clients.update(client, id);
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