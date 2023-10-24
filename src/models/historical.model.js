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
    serviceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"codigo_servicio",
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