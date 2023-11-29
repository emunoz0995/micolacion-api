const Consecutivo = require('../models/consecutivo.model');

class consecutivoMiddleware {
    static async asegurarConsecutivo(req, res, next) {
        try {
            const consecutivo = await Consecutivo.findOne({where:{}});
             if (consecutivo === null) {
                 await Consecutivo.create({valor: 1});
             }
            req.consecutivo = consecutivo.valor;

            next();
        } catch (error) {
            res.status(500).send('Error interno del servidor');
        }
    };
}

module.exports = consecutivoMiddleware;

