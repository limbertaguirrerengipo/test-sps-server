const databaseService = require('../../services/databaseService');
const databaseConfiguration = require('../../config/databaseServer.json').conexion;
databaseConfiguration.databaseName = 'bdprueba';

const connection = databaseService.getDatabaseConnection(databaseConfiguration);
module.exports = connection;
