const StudentServices = require('../../models/studentServices.model');
const Clients = require('../../models/clients.model');
const Section = require('../../models/sections.model');
const Services = require('../../models/services.model')

class AditionalService {
    static async getAditionalServices(school_id) {
        try {
            const result = await StudentServices.findAll({
                where:{statusAditional: false, schoolId: school_id},
                attributes:['id','total','statusAditional'],
                include: [{
                    model: Clients,
                    as: 'cliente', 
                    attributes:['firstName','lastName','cedulaCliente'],
                    include: [{
                        model: Section,
                        as: 'cliente_seccion',
                        attributes: ['name'],
                    }]
                },{
                    model: Services,
                    as: 'servicio',
                    attributes: ['name'],
                }],
                order: [
                    [{ model: Clients, as: 'cliente' }, 'lastName', 'ASC']
                ],
                
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getServicesAditionalById(serviceId) {
        try {
            const result = await StudentServices.findAll({
                where:{statusAditional: false, serviceId},
                attributes:['id','total','statusAditional'],
                include: [{
                    model: Clients,
                    as: 'cliente', 
                    attributes:['firstName','lastName','cedulaCliente'],
                    include: [{
                        model: Section,
                        as: 'cliente_seccion',
                        attributes: ['name'],
                    }]
                },{
                    model: Services,
                    as: 'servicio',
                    attributes: ['name'],
                }],
                
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getServicesAditionalProcessById(serviceId) {
        try {
            const result = await StudentServices.findAll({
                where:{statusAditional: true, serviceId},
                attributes:['id','total','statusAditional'],
                include: [{
                    model: Clients,
                    as: 'cliente', 
                    attributes:['firstName','lastName','cedulaCliente'],
                    include: [{
                        model: Section,
                        as: 'cliente_seccion',
                        attributes: ['name'],
                    }]
                },{
                    model: Services,
                    as: 'servicio',
                    attributes: ['name'],
                }],
                
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getAditionalServicesProcess(schoolId) {
        try {
            const result = await StudentServices.findAll({
                where: { statusAditional: true, schoolId },
                attributes:['id','total','statusAditional'],
                include: [{
                    model: Clients,
                    as: 'cliente', 
                    attributes:['firstName','lastName','cedulaCliente'],
                    include: [{
                        model: Section,
                        as: 'cliente_seccion',
                        attributes: ['name'],
                    }]
                },{
                    model: Services,
                    as: 'servicio',
                    attributes: ['name'],
                }],
                
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = AditionalService;