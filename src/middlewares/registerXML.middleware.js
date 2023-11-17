const Clients = require('../models/clients.model');
const History = require('../models/historical.model');
const XML = require('../models/generateXML.model');
const Representative = require('../models/representative.model')

class xmlMiddleware {
    static async xmlRenewServices(req, res) {
        try {
            const ci = req.params.client_ci;
            const result = await Clients.findOne({ where: { cedulaCliente: ci } });
            if (result) {
                const { cedulaCliente, firstName,
                    lastName, sectionId, representativeId,
                    schoolId, serviceId, totalBreakfast, totalLunch,
                    breakfastConsumed, lunchesConsumed, totalExtras } = result.dataValues;
                await XML.create({
                    cedulaCliente, firstName,
                    lastName, sectionId, representativeId,
                    schoolId, serviceId, totalBreakfast, totalLunch,
                    breakfastConsumed, lunchesConsumed, totalExtras
                });
                const representante = await Representative.findOne({ where: { id: representativeId } });
                if (representante) {
                    representante.update({ generateXML: true })
                }
            }
        } catch (error) {
            throw error;
        }
    };

    static async xmlPaidServices(req, res) {
        try {
            const id = req.params.client_id;
            const result = await History.findOne({ where: { id } });
            if (result.dataValues) {
                const { cedulaCliente, firstName,
                    lastName, sectionId, representativeId,
                    schoolId, serviceId, breakfastConsumed, lunchesConsumed } = result.dataValues;
                await XML.create({
                    cedulaCliente, firstName,
                    lastName, sectionId, representativeId,
                    schoolId, serviceId, breakfastConsumed,
                    lunchesConsumed
                });
                const representante = await Representative.findOne({ where: { id: representativeId } });
                if (representante) {
                    representante.update({ generateXML: true })
                }
            }
        } catch (error) {
            throw error;
        }
    };

}

module.exports = xmlMiddleware;

