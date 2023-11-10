const Clients = require('../models/clients.model');
const History = require('../models/historical.model');

class historyMiddleware {
    static async historyBreakFast(req, res) {
        try {

            const ci = req.params.client_ci;
            const result = await Clients.findOne({ where: { cedulaCliente: ci } });
            if (result) {
                const { cedulaCliente, firstName,
                    lastName, sectionId, representativeId, schoolId, paidService } = result.dataValues;
                const breakfastConsumed = 1;
                if (schoolId === 1) {
                    await History.create({
                        cedulaCliente,
                        firstName, lastName,
                        sectionId,
                        representativeId,
                        schoolId,
                        serviceId: 52,
                        breakfastConsumed,
                        paidService,
                    }
                    );
                } else if (schoolId === 2) {
                    await History.create({
                        cedulaCliente,
                        firstName, lastName,
                        sectionId,
                        representativeId,
                        schoolId,
                        serviceId: 55,
                        breakfastConsumed,
                        paidService,
                    }
                    );
                }
            }
        } catch (error) {
            throw error;
        }
    };

    static async historyLuch(req, res, next) {
        try {
            const ci = req.params.client_ci;
            const result = await Clients.findOne({ where: { cedulaCliente: ci } });
            if (result) {
                const { cedulaCliente, firstName,
                    lastName, sectionId, representativeId, schoolId, paidService } = result;
                const lunchesConsumed = 1;
                if (schoolId === 1) {
                    await History.create(
                        {
                            cedulaCliente,
                            firstName, lastName,
                            sectionId,
                            representativeId,
                            schoolId,
                            serviceId: 53,
                            lunchesConsumed,
                            paidService
                        }
                    );
                }else if (schoolId === 2) {
                    await History.create(
                        {
                            cedulaCliente,
                            firstName, lastName,
                            sectionId,
                            representativeId,
                            schoolId,
                            serviceId: 56,
                            lunchesConsumed,
                            paidService
                        }
                    );
                }
            }
            next();
        } catch (error) {
            throw error;
        }
    };

    static async historyExtras(req, res, next) {
        try {
            const ci = req.params.client_ci;
            const result = await Clients.findOne({ where: { cedulaCliente: ci } });
            if (result) {
                const { cedulaCliente, firstName,
                    lastName, sectionId, representativeId, schoolId, serviceId } = result;
                const breakfastConsumed = 1;
                await History.create(
                    cedulaCliente,
                    firstName, lastName,
                    sectionId,
                    representativeId,
                    schoolId,
                    serviceId,
                    breakfastConsumed,
                );
            }
            next();
        } catch (error) {
            throw error;
        }
    };
}

module.exports = historyMiddleware;

