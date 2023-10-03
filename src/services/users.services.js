const Users = require('../models/users.models');
const Roles = require('../models/roles.model');
const { Op } = require("sequelize");



class UserService {
    static async getAll() {
        try {
            const result = await Users.findAll({
                attributes: ['id','first_name','last_name','email','active'],
                include: {
                    model: Roles,
                    as: 'user_rol',
                    attributes: ['name'],
                }

            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getUserById(id) {
        try {
            const result = await Users.findOne({
                where: { id },
                attributes: ['first_name','last_name','email','active','role_id'],
                include: {
                    model: Roles,
                    as: 'user_rol',
                    attributes: ['name'],
                }

            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async createUser(user) {
        try {
            const result = await Users.create(user);
            return result;
        } catch (error) {
            throw error;
         
        }
    }

    static async updateUser(user, id) {
        try {
            const result = await Users.update(user,id);
            return result;
        } catch (error) {
            throw error;  
        }
    }

    static async delete(id) {
        try {
            const result = await Users.destroy(id);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports =  UserService;