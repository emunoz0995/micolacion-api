
const StudentServices = require('../models/studentServices.model');
const Services = require('../models/services.model');

class StudentServiceService {

    static async getServicesByStudent(id) {
        try {
            const result = await StudentServices.findAll({
                where: { clientId: id },
                include: {
                    model: Services,
                    as: 'servicio',
                    attributes: ['name'],
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getAditionalServicesById(id) {
        try {
            const result = await StudentServices.findOne({
                where: { id },
                include: {
                    model: Services,
                    as: 'servicio',
                    attributes: ['name'],
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async createServices(id, schoolId, items) {
        try {
            items.forEach(item => {
                const result = StudentServices.create({
                    clientId: id,
                    serviceId: item.serviceId,
                    schoolId: schoolId,
                    total: item.total
                });
                return result;
            });
        } catch (error) {
            throw error;
        }
    }

    static async updateServices(id, schoolId, items) {
        try {
            const serviciosClienteExistente = await StudentServices.findAll({ where: { clientId: id } });
            const serviciosClienteNuevos = items.filter((nuevoServicio) => {
                return !serviciosClienteExistente.some((servicioExistente) => {
                    return (
                        servicioExistente.client_id === nuevoServicio.client_id &&
                        servicioExistente.service_id === nuevoServicio.service_id
                    );
                });
            });
            serviciosClienteNuevos.forEach(item => {
                const result = StudentServices.create({
                    clientId: id,
                    serviceId: item.serviceId,
                    schoolId: schoolId,
                    total: item.total
                });
                return result;
            });
        } catch (error) {
            throw error;
        }
    }

    static async deleteServiceByStudent(id) {
        try {
            const result = await StudentServices.destroy(id);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = StudentServiceService;