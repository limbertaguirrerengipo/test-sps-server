const { Router } = require("express");
const routes = Router();

const { registrarUsuario } = require("./services/usuarioService");

routes.get("/", (req, res) => {
  res.send("Hello World!");
});

routes.post("/registrar", async (req, res) => {
  try {
  const { nombre, carnet, apellidoPaterno, apellidoMaterno, telefono, direccion, fechaNacimiento } = req.body;
  await registrarUsuario({nombre, carnet, apellidoPaterno, apellidoMaterno, telefono, direccion, fechaNacimiento } )
  const respo = {
    nombre,
    carnet
  };
  res.send({status:0, message: 'Se registro el usuario', data: respo});
} catch (error) {
  res.send({status:1, message: error.message, data: null});
}
});

module.exports = routes;
