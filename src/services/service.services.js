const Schools = require('../models/schools.model');
const Services = require('../models/services.model');

class ServicesService {
    static async getAll() {
        try {
            const result = await Services.findAll({
                attributes: ['id', 'code', 'name', 'price', 'isLcv', 'isCervantes', 'isDiscovery', "isExtra", "isAditional", 'active'],
                order: [
                    ['name', 'ASC'],
                ],
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getServicesBySchool(school_id) {
        try {
            const school = await Schools.findOne({ where: { id: school_id } });
            const result = await Services.findAll({
                where: { [school.code]: true },
                attributes: ['id', 'code', 'name', 'price', 'isLcv', 'isCervantes', 'isDiscovery', "isExtra", 'active']
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getAditionalServicesBySchool(school_id) {
        try {
            const school = await Schools.findOne({ where: { id: school_id } });
                const result = await Services.findAll({
                     where: { [school.code]: true },
                    attributes: ['id', 'code', 'name', 'price', 'isLcv', 'isCervantes', 'isDiscovery', "isExtra", 'active']
                });
                return result;
        } catch (error) {
            throw error;
        }
    }

    static async getServicesExtras() {
        try {
            const result = await Services.findAll({
                where: { isExtra: true },
                attributes: ['id', 'code', 'name', 'price', 'isLcv', 'isCervantes', 'isDiscovery', "isExtra", 'active']
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getServiceById(id) {
        try {
            const result = await Services.findOne({
                where: { id }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async createService(service) {
        try {
            const result = await Services.create(service);
            return result;
        } catch (error) {
            throw error;

        }
    }

    static async updateService(service, id) {
        try {
            const result = await Services.update(service, id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const result = await Services.destroy(id);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ServicesService;