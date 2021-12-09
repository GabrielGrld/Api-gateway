const authResolver = require('./auth_resolver');
const paymentResolver = require('./payment_resolver');
const pqrResolver = require('./pqr_resolver');
const productsResolver = require('./products_resolver');


const lodash = require('lodash');
const resolvers = lodash.merge(authResolver, paymentResolver, pqrResolver, productsResolver);
module.exports = resolvers;