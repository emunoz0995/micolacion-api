const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Services = db.define('services', {

    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },  
    code: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(8,2),
        defaultValue: 0,
    },
    isLcv: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    isCervantes: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    isExtra: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    isAditional: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },

});

module.exports = Services;