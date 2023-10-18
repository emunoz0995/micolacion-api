const Sections = require('../models/sections.model');

class SectionsService {
    static async getAll() {
        try {
            const result = await Sections.findAll({
                attributes: ['id', 'name', 'isLcv', 'isCervantes', 'active']
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getSectionsBySchool(school_id) {
        try {
            if (school_id === 1) {
                const result = await Sections.findAll({
                    where: { isLcv: true },
                    attributes: ['id', 'name', 'isLcv', 'isCervantes', 'active']
                });
                return result;
            } else if (school_id === 2) {
                const result = await Sections.findAll({
                    where: { isCervantes: true },
                    attributes: ['id', 'name', 'isLcv', 'isCervantes', 'active']
                });
                return result;
            }
        } catch (error) {
            throw error;
        }
    }

    static async getSectionById(id) {
        try {
            const result = await Sections.findOne({
                where: { id },
                attributes: ['id', 'name', 'isLcv', 'isCervantes', 'active']
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async createSection(service) {
        try {
            const result = await Sections.create(service);
            return result;
        } catch (error) {
            throw error;

        }
    }

    static async updateSection(service, id) {
        try {
            const result = await Sections.update(service, id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async deleteSection(id) {
        try {
            const result = await Sections.destroy(id);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = SectionsService;