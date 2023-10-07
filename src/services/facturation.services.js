const History = require('../models/historical.model');
const Section = require('../models/sections.model');
const Services = require('../models/services.model')
const Representative = require('../models/representative.model');
const { Op } = require('sequelize');

class FacturationService {
    static async getServicesReceivable(school_id) {
        try {
            const result = await History.findAll({
                where: { schoolId: school_id, paidService: false},
                include: [{
                    model: Section,
                    as: 'history_seccion',
                    attributes: ['name'],
                }, {
                    model: Services,
                    as: 'history_servicio',
                    attributes: {
                        exclude: ['createdAt','updatedAt'],
                    }
                        
                },{
                    model: Representative,
                    as: 'history_representante',
                }]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getServicesGenerateXML(school_id) {
        try {
            const result = await History.findAll({
                where: { schoolId: school_id, 
                         sectionId:[1,2,3,4,5,6,7],
                         [Op.or]:{
                            totalBreakfast: { [Op.lte]: 5 },
                            totalLunch: { [Op.lte]: 5 },
                         }          
                        },
                include: [{
                    model: Section,
                    as: 'cliente_seccion',
                    attributes: ['name'],
                }, {
                    model: Services,
                    as: 'cliente_servicio',
                    attributes: ['name','price'],
                },{
                    model: Representative,
                    as: 'cliente_representante',
                }]
            });

            console.log(result)
            return result;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

}

module.exports = FacturationService;