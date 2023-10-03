const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Representative = db.define('representative', {

    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },   
    names: {
        type: DataTypes.STRING,
        allowNull: false,
        field:"nombres",
    },
    cedulaRepresentante: {
        type: DataTypes.STRING,
        allowNull: false,
        field:"cedula_representante",
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    adress: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"direccion",
    },
    telefon: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"telefono",
    },
});

module.exports = Representative;