//Se llama al typedef (esquema) de cada submodulo
const authTypeDefs = require('./auth_type_defs');
const paymentTypeDefs = require('./payment_type_defs');
const pqrTypeDefs = require('./pqr_type_defs');
const productsTypeDefs = require('./products_type_defs');


//Se unen
const schemasArrays = [authTypeDefs, paymentTypeDefs, pqrTypeDefs, productsTypeDefs];


//Se exportan
module.exports = schemasArrays;