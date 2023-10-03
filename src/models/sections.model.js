const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Section = db.define('section', {

    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },  
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    isLcv: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    isCervantes: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },

});

module.exports = Section;