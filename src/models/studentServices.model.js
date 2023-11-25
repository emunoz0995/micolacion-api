const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const StudentServices = db.define('student_services', {

    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    clientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "client_id",
    },
    serviceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "service_id",
    },
    total: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
});

module.exports = StudentServices;