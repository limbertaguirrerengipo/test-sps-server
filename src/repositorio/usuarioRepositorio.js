const { UsuariosModel } = require('../models/dbComisiones/UsuariosModel');
const sequelize = require('sequelize');

const crearUsuario = async ({nombre, carnet, apellidoPaterno, apellidoMaterno, telefono, direccion, fechaNacimiento }) => {

    try {
        return await UsuariosModel.create({
            nombre: nombre,
            carnet: carnet,
            apellidoPaterno: apellidoPaterno,
            apellidoMaterno: apellidoMaterno,
            telefono: telefono,
            direccion: direccion,
            fechaNacimiento:sequelize.cast(new Date(fechaNacimiento), 'DATETIMEOFFSET'),
        });
    } catch (error) {
        throw new Error(error.message);
    }
};
const buscarUsuarioByCarnet = async (carnet) => {

    try {
        return await UsuariosModel.findOne({
            where: {
                carnet: {
                    [sequelize.Op.eq]: carnet
                }
            },
            limit: 0,
            raw: true
        })
    } catch (error) {
        throw new Error(error.message);
    }
};


module.exports = {
    crearUsuario,
    buscarUsuarioByCarnet
};