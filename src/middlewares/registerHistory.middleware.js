const Clients = require('../models/clients.model');
const StudentServiceService = require('../services/studentServices.services');
const History = require('../models/historical.model');

class historyMiddleware {
    static async historyBreakFast(req, res) {
        try {
            const ci = req.params.client_ci;
            const result = await Clients.findOne({ where: { cedulaCliente: ci } });
            if (result) {
                const { cedulaCliente, firstName,
                    lastName, sectionId, representativeId, serviceId, schoolId, totalBreakfast, totalLunch, paidService } = result.dataValues;
                const breakfastConsumed = 1;
                await History.create({
                    cedulaCliente,
                    firstName, lastName,
                    sectionId,
                    representativeId,
                    schoolId,
                    principalService: serviceId,
                    serviceId: schoolId === 1 ? 52 : schoolId === 2 ? 55 : 98,
                    totalBreakfast,
                    totalLunch,
                    breakfastConsumed,
                    paidService,
                }
                );
            }
        } catch (error) {
            throw error;
        }
    };

    static async historyDecrementBreakFast(req, res) {
        try {
            const ci = req.params.client_ci;
            const result = await Clients.findOne({ where: { cedulaCliente: ci } });
            if (result) {
                const { cedulaCliente, firstName,
                    lastName, sectionId, representativeId, serviceId, schoolId, totalBreakfast, totalLunch, paidService } = result.dataValues;
                const breakfastConsumed = 1;
                await History.create({
                    cedulaCliente,
                    firstName, lastName,
                    sectionId,
                    representativeId,
                    schoolId,
                    principalService: serviceId,
                    serviceId: schoolId === 1 ? 52 : schoolId === 2 ? 55 : 98,
                    totalBreakfast,
                    totalLunch,
                    breakfastConsumed,
                    paidService: 1,
                });
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
                    lastName, sectionId, representativeId, serviceId, schoolId, totalBreakfast, totalLunch, paidService } = result;
                const lunchesConsumed = 1;
                await History.create(
                    {
                        cedulaCliente,
                        firstName, lastName,
                        sectionId,
                        representativeId,
                        schoolId,
                        principalService: serviceId,
                        serviceId: schoolId === 1 ? 53 : schoolId === 2 ? 56 : 99,
                        serviceId: 53,
                        totalBreakfast,
                        totalLunch,
                        lunchesConsumed,
                        paidService
                    }
                );
            }
            next();
        } catch (error) {
            throw error;
        }
    };

    static async historyDecrementLuch(req, res, next) {
        try {
            const ci = req.params.client_ci;
            const result = await Clients.findOne({ where: { cedulaCliente: ci } });
            if (result) {
                const { cedulaCliente, firstName,
                    lastName, sectionId, representativeId, serviceId, schoolId, totalBreakfast, totalLunch, paidService } = result;
                const lunchesConsumed = 1;
                await History.create(
                    {
                        cedulaCliente,
                        firstName, lastName,
                        sectionId,
                        representativeId,
                        schoolId,
                        principalService: serviceId,
                        serviceId: schoolId === 1 ? 53 : schoolId === 2 ? 56 : 99,
                        totalBreakfast,
                        totalLunch,
                        lunchesConsumed,
                        paidService: 1,
                    }
                );
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

    static async historyAditionalService(req, res) {
        try {
            const cedulaCliente = req.body.clientCi
            const id = req.params.id;
            const result = await Clients.findOne({ where: { cedulaCliente } });
            const aditional = await StudentServiceService.getAditionalServicesById(id);
            if (result) {
                const { cedulaCliente, firstName,
                    lastName, sectionId, representativeId, serviceId, schoolId, totalBreakfast, totalLunch, paidService } = result;
                const aditionalConsumed = 1;
                await History.create({
                    cedulaCliente,
                    firstName,
                    lastName,
                    sectionId,
                    representativeId,
                    schoolId,
                    principalService: serviceId,
                    serviceId: aditional.serviceId,
                    totalBreakfast,
                    totalLunch,
                    totalAditionals: aditional.total,
                    aditionalConsumed,
                    paidService,
                }
                );
            }
        } catch (error) {
            throw error;
        }
    };


}

module.exports = historyMiddleware;

