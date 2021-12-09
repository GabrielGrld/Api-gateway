const productsResolver = {

    Query: {
        productsCollection: (_, { productsAll }, { dataSources}) => {
            dataSources.pqrAPI.getProducts(productsAll)
        },
        

},
Mutation: {}
};

module.exports = productsResolver;