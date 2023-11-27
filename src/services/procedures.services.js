const Clients = require('../models/clients.model');
const StudentServices = require('../models/studentServices.model'); 
const History = require('../models/historical.model');

class RefrigeriosProcessService {

    //breakfast
    static async decrementBreakFast(ci) {
        try {
            const result = await Clients.findOne({ where: { cedulaCliente: ci } });
            if (result) {
                result.decrement('totalBreakfast', { by: 1 });
                result.increment('breakfastConsumed', { by: 1 });
                result.update({ statusBreakfast: true });
                if (result.serviceId === 34 ||
                    result.serviceId === 35 ||
                    result.serviceId === 45 ||
                    result.serviceId === 46 ||
                    result.serviceId === 47) {
                    result.decrement('totalLunch', { by: 1 });
                    result.increment('lunchesConsumed', { by: 1 });
                    result.update({ statusLunch: true })
                }
            }
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async incrementBreakFast(ci) {
        try {
            const result = await Clients.findOne({ where: { cedulaCliente: ci } });
            if (result) {
                result.increment('breakfastConsumed', { by: 1 });
                result.update({ statusBreakfast: true })
            }
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async revertBreakFast(ci) {
        try {
            const result = await Clients.findOne({ where: { cedulaCliente: ci } });
            if (result) {
                result.increment('totalBreakfast', { by: 1 });
                result.decrement('breakfastConsumed', { by: 1 });
                result.update({ statusBreakfast: false })
                const findUltimateRegister = await History.findOne({
                    order: [['createdAt', 'DESC']]
                });
                if (findUltimateRegister) {
                    findUltimateRegister.destroy({
                        where: { cedulaCliente: ci }
                    })
                }
            }
            return result;
        } catch (error) {
            throw error;
        }
    }


    //Lunch
    static async decrementLunch(ci) {
        try {
            const result = await Clients.findOne({ where: { cedulaCliente: ci } });
            if (result) {
                result.decrement('totalLunch', { by: 1 });
                result.increment('lunchesConsumed', { by: 1 });
                result.update({ statusLunch: true });
                if (result.serviceId === 34 ||
                    result.serviceId === 35 ||
                    result.serviceId === 45 ||
                    result.serviceId === 46 ||
                    result.serviceId === 47) {
                    result.decrement('totalBreakfast', { by: 1 });
                    result.increment('breakfastConsumed', { by: 1 });
                    result.update({ statusBreakfast: true });
                }
            }
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async incrementLunch(ci) {
        try {
            const result = await Clients.findOne({ where: { cedulaCliente: ci } });
            if (result) {
                result.increment('lunchesConsumed', { by: 1 });
                result.update({ statusLunch: true })
            }
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async revertLunch(ci) {
        try {
            const result = await Clients.findOne({ where: { cedulaCliente: ci } });
            if (result) {
                result.increment('totalLunch', { by: 1 });
                result.decrement('lunchesConsumed', { by: 1 });
                result.update({ statusLunch: false });
                const findUltimateRegister = await History.findOne({
                    order: [['createdAt', 'DESC']]
                });
                if (findUltimateRegister) {
                    findUltimateRegister.destroy({
                        where: { cedulaCliente: ci }
                    })
                }
            }
            return result;
        } catch (error) {
            throw error;
        }
    }

    //ADICIONAL
    static async decrementAdicional(id) {
        try {
            const result = await StudentServices.findOne({ where: { id } });
            if (result) {
                result.decrement('total', { by: 1 });
                result.update({ statusAditional: true });
            }
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async revertAdicional(id) {
        try {
            const result = await StudentServices.findOne({ where: {id} });
            if (result) {
                result.increment('total', { by: 1 });
                result.update({ statusAditional: false });
            }
            return result;
        } catch (error) {
            throw error;
        }
    }

    //Services
    static async registerExtra(data) {
        const { cedulaCliente, serviceId } = data;
        try {
            const result = await Clients.findOne({ where: { cedulaCliente } });
            if (result) {
                const { cedulaCliente, firstName,
                    lastName, sectionId, representativeId, schoolId } = result.dataValues;
                const extrasConsumed = 1;
                await History.create({
                    cedulaCliente,
                    firstName, lastName,
                    sectionId,
                    representativeId,
                    schoolId,
                    serviceId,
                    extrasConsumed,
                }
                );
            }
        } catch (error) {
            throw error;
        }
    }


    static async renewService(ci, data) {
        const { totalBreakfast, totalLunch } = data;
        try {
            const result = await Clients.findOne({ where: { cedulaCliente: ci } });
            if (result) {
                if (!data.totalBreakfast) {
                    result.update({ totalLunch, breakfastConsumed: 0, lunchesConsumed: 0 })
                } else if (!data.totalLunch) {
                    result.update({ totalBreakfast, breakfastConsumed: 0, lunchesConsumed: 0 })
                } else {
                    result.update({ totalBreakfast, totalLunch, breakfastConsumed: 0, lunchesConsumed: 0 })
                }
            }
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async startDay(schoolId) {
        try {
            const result = await Clients.update({ statusBreakfast: false, statusLunch: false },
                {
                    where: { schoolId }
                });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async paidService(id) {
        try {
            const result = await History.findOne({ where: { id } });
            if (result) {
                result.update({ paidService: true })
            }
            return result;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = RefrigeriosProcessService;
