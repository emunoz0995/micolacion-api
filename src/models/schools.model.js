const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Schools = db.define('schools', {

    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },  
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },

});

module.exports = Schools;