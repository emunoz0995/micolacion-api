const SectionsService = require('../services/section.services');
const Utils = require('../utils/Utils');

const getAllSections = async (req, res) => {
    try {
        const result = await SectionsService.getAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getSectionsBySchool = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await SectionsService.getSectionsBySchool(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getSection = async (req, res) => {
    try {
        const section_id = req.params.section_id;
        const result = await SectionsService.getSectionById(section_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const createSection = async (req, res) => {
    try {
        const section = req.body;
        const result = await SectionsService.createSection(section);
        res.status(201).json({ message: 'resource created successfully' });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const updateSection = async (req, res) => {
    try {
        const { id } = req.params;
        const section = req.body;
        const result = await SectionsService.updateSection(section, {
            where: { id },
        });
        console.log(result)
        res.status(200).json({message: 'resource updated successfully'});
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const deleteSection = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await SectionsService.delete({
            where: { id }
        });
        res.status(200).json({message:'resource deleted successfully'})
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllSections,
    getSection,
    createSection,
    updateSection,
    deleteSection,
    getSectionsBySchool
}