const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const XML = db.define('generateXML', {

    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },   
    cedulaCliente: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"cedula_cliente",
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"nombre",
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"apellido",
    }, 
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    sectionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"codigo_seccion",
    }, 
    representativeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"codigo_representante",
    }, 
    schoolId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"codigo_colegio",
    }, 
    serviceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"codigo_servicio",
    },
    totalBreakfast: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        field:"total_desayunos",
    },
    totalLunch: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        field:"total_almuerzos",
    },
    breakfastConsumed: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        field:"desayunos_consumidos",
    },
    lunchesConsumed: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        field:"almuerzos_consumidos",
    },
    totalExtras: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        field:"total_extras",
    },
    isGenerateXML: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field:"xml_generado",
    },

});

module.exports = XML;