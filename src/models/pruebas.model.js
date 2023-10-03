const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Pruebas = db.define('pruebas', {

    CodigoAlumno: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },   
    Apellido: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    CedulaAlumno: {
        type: DataTypes.STRING,
        allowNull: true,
    }, 
    Edad: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    CodigoRepresentante: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    Representante: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    CedulaRep: {
        type: DataTypes.STRING,
        allowNull: true,
    }, 
    Direccion_Rep: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Email_Rep: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Telefono_Rep: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    PeriodoLectivo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    TDONombre: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Grado: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Colegio_Codigo: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    Colegio_Nombre: {
        type: DataTypes.STRING,
        defaultValue: true,
    },
       

});

module.exports = Pruebas;