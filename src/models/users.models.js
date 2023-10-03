const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const bcrypt = require("bcrypt");

const Users = db.define('users', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field:"first_name",
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field:"last_name",
    }, 
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"role_id",
    }, 
},	{
    hooks: {
        beforeCreate: (user, options) => {
            const { password } = user;
            const hash = bcrypt.hashSync(password, 10);
            user.password = hash;
        }
    }
}
);

module.exports = Users;