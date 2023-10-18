const SchoolService = require('../services/schools.services');
const Utils = require('../utils/Utils');
const getAllSchools = async (req, res) => {
    try {
        const result = await SchoolService.getAll();
        if (result instanceof Array) {
            result.map((x) => {
              x.dataValues.id = Utils.encode(x.dataValues.id);
            }); 
          }
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getSchool = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await SchoolService.getSchoolById(school_id);
        if (result.dataValues instanceof Object) {
            result.dataValues.id = Utils.encode(result.dataValues.id);
          }
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const createSchool = async (req, res) => {
    try {
        const school = req.body;
        const result = await SchoolService.createSchool(school);
        res.status(201).json({ message: 'resource created successfully' });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const updateSchool = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.id);
        const school = req.body;
        const result = await SchoolService.updateSchool(school, {
            where: { id: school_id },
        });
        res.status(200).json({message: 'resource updated successfully'});
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const deleteSchool = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await SchoolService.delete({
            where: { id }
        });
        res.status(200).json({message:'resource deleted successfully'})
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllSchools,
    getSchool,
    createSchool,
    updateSchool,
    deleteSchool
}