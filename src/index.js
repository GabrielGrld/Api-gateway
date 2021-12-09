const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const AuthAPI = require('./dataSources/auth_api');
const PaymentAPI = require('./dataSources/payment_api');
const PqrAPI = require('./dataSources/pqr_api');
const ProductsAPI = require('./dataSources/products_api');


const authentication = require('./utils/authentication');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        authAPI: new AuthAPI(),
        paymentAPI: new PaymentAPI(),
        pqrAPI: new  PqrAPI(),
        productsAPI: new  ProductsAPI(),
        
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
console.log(`🚀 Server ready at ${url}`);
});