const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const History = db.define('history', {

    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },   
    cedulaCliente: {
        type: DataTypes.STRING,
        allowNull: false,
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
    principalService: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"servicio_principal",
    },
    serviceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"codigo_servicio",
    },
    totalBreakfast: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        field:"total_desayunos",
    },
    totalLunch: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        field:"total_adicionales",
    },
    totalAditionals: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        field:"total_almuerzos",
    },
    breakfastConsumed: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        field:"desayunos_consumidos",
    },
    lunchesConsumed: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        field:"almuerzos_consumidos",
    },
    aditionalConsumed: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        field:"adicionales_consumidos",
    },
    extrasConsumed: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        field:"extras_consumidos",
    },
    paidService: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field:"servicio_pagado",
    },    

});

module.exports = History;