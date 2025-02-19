const { DataTypes } = require('sequelize');
const databaseConnection = require('./dbComisionesConnection');

exports.UsuariosModel = databaseConnection.define('UsuariosModel', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'ID'
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: 'Nombre'
    },
    carnet: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'Carnet'
    },
    apellidoPaterno: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: 'ApellidoPaterno'
    },
    apellidoMaterno: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: 'ApellidoMaterno'
    },
    telefono: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'Telefono'
    },
    direccion: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'Direccion'
    },
    fechaNacimiento: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'FechaNacimiento'
    }
}, {
    tableName: 'Usuarios',
    timestamps: false
});
