const Schools = require('../models/schools.model');

class SchoolService {
    static async getAll() {
        try {
            const result = await Schools.findAll({
                attributes: ['id', 'name', 'code', 'active']
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getSchoolById(id) {
        try {
            const result = await Schools.findOne({
                where: { id },
                attributes: ['id', 'name', 'code', 'active']
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async createSchool(school) {
        try {
            const result = await Schools.create(school);
            return result;
        } catch (error) {
            throw error;

        }
    }

    static async updateSchool(school, id) {
        try {
            const result = await Schools.update(school, id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const result = await Schools.destroy(id);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = SchoolService;