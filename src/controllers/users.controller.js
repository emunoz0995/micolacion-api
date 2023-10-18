const UserService = require('../services/users.services');

const getAllUsers = async (req, res) => {
    try {
        const result = await UserService.getAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getUser = async (req, res) => {
    try {
        const { user_id } = req.params;
        const result = await UserService.getUserById(user_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const createUser = async (req, res) => {
    try {
        const user = req.body;
        const result = await UserService.createUser(user);
        res.status(201).json({ message: 'resource created successfully' });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = req.body;
        const result = await UserService.updateUser(user, {
            where: { id },
        });
        res.status(200).json({message: 'resource updated successfully'});
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await UserService.delete({
            where: { id }
        });
        res.status(200).json({message:'resource deleted successfully'})
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}