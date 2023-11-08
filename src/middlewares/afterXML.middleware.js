const XML = require('../models/generateXML.model');
const Representative = require('../models/representative.model')

class afterxmlMiddleware {
    static async xmlGenerado(req, res) {
        try {
            const invoice = req.body;
            
            const representante = await Representative.findOne({ where: { cedulaRepresentante: invoice[0].ci } });
            console.log(representante)
            if (representante) {
                representante.update({ generateXML: false });
                invoice.forEach((item)  => {
                    const services = XML.update({ isGenerateXML: true },{ where: { id: item.id } });
                }) 
            }
        } catch (error) {
            throw error;
        }
    };
}

module.exports = afterxmlMiddleware;

