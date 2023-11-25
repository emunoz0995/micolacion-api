
const Representative = require('../models/representative.model');

class RepresentativeService {
    static async getAll() {
        try {
            const result = await Representative.findAll({
                order: [
                    ['lastName', 'ASC'],
                ],
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getRepresentativeByCI(ci) {
        try {
            const result = await Representative.findOne({
                where: { cedulaRepresentante: ci },
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getRepresentativeById(id) {
        try {
            const result = await Representative.findOne({
                where: { id },
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async createRepresentante(client) {
        try {
            const { names, cedulaRepresentante, email, adress, telefon, } = client;
            const result = await Representative.create({ names, cedulaRepresentante, email, adress, telefon });
            return result;
        } catch (error) {
            throw error;

        }
    }


    static async updateRepresentative(client, id) {
        try {
            const { names, cedulaRepresentante, email, adress, telefon } = client;
            const result = await Representative.update({ names, cedulaRepresentante, email, adress, telefon }, id);
            return result;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    static async delete(id) {
        try {
            const result = await Representative.destroy(id);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = RepresentativeService;