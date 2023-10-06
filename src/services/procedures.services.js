const Clients = require('../models/clients.model');

class RefrigeriosProcessService{

    //breakfast
    static async decrementBreakFast(ci) {
        try {
            const result = await Clients.findOne({ where: { cedulaCliente: ci } });
            if (result) {
                result.decrement('totalBreakfast', { by: 1 });
                result.increment('breakfastConsumed', { by: 1 });
                result.update({ statusBreakfast: true })
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
            }
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async payBreakFast(ci) {
        try {
            const result = await Clients.findOne({ where: { cedulaCliente: ci } });
            if (result) {
                result.update({ statusBreakfast: false })
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
                result.update({ statusLunch: true })
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
                result.update({ statusLunch: false })
            }
            return result;
        } catch (error) {
            throw error;
        }
    }

    //Services
    static async renewService(ci,data) {
        const {totalBreakfast, totalLunch} = data;
        try {
            const result = await Clients.findOne({ where: { cedulaCliente: ci } });
            if (result) {
                result.update({ totalBreakfast, totalLunch, breakfastConsumed: 0, lunchesConsumed: 0 })
            }
            console.log(result)
            return result;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = RefrigeriosProcessService;
