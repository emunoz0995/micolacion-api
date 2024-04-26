
const RepresentativeService = require('../services/representatives.services');
const Utils = require('../utils/Utils');


const getRepresentative = async (req, res) => {
    try {
        const representativeId = req.params.representative_id;
        const result = await RepresentativeService.getRepresentativeByCI(representativeId);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}
module.exports = {
    getRepresentative,
}