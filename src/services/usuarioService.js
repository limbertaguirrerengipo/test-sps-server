
const { UsuariosModel } = require('../models/dbComisiones/UsuariosModel');
const sequelize = require('sequelize');
const { 
    crearUsuario,
    buscarUsuarioByCarnet
 } = require("../repositorio/usuarioRepositorio");

const registrarUsuario = async ({nombre, carnet, apellidoPaterno, apellidoMaterno, telefono, direccion, fechaNacimiento }) => {

    try {
        const objUsuario= await buscarUsuarioByCarnet(carnet);
        if(objUsuario){
            throw new Error('Ya existe un usuario con este Carnet de identidad');
        }
        const registro =  await crearUsuario({nombre, carnet, apellidoPaterno, apellidoMaterno, telefono, direccion, fechaNacimiento })
        return registro;

    } catch (error) {
        console.log('errror', error);
        throw new Error(error.message);
    }
};

module.exports = {
    registrarUsuario
};