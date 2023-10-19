const Services = require('../models/services.model');

class ServicesService {
    static async getAll() {
        try {
            const result = await Services.findAll({
                attributes: ['id','code','name','price','isLcv', 'isCervantes',"isExtra",'active']
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getServicesBySchool(school_id) {
        try {
            if (school_id === 1) {
                const result = await Services.findAll({
                    where: { isLcv: true },
                    attributes: ['id','code','name','price','isLcv', 'isCervantes',"isExtra",'active']
                });
                return result;
            } else if (school_id === 2) {
                const result = await Services.findAll({
                    where: { isCervantes: true },
                    attributes: ['id','code','name','price','isLcv', 'isCervantes',"isExtra",'active']
                });
                return result;
            }
        } catch (error) {
            throw error;
        }
    }

    static async getServicesExtras() {
        try {
            const result = await Services.findAll({
                where: { isExtra: true },
                attributes: ['id','code','name','price','isLcv', 'isCervantes',"isExtra",'active']
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
            const result = await Services.update(service,id);
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

module.exports =  ServicesService;