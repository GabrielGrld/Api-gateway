const pqrResolver = {

    Query: {
        pqrCollection: (_, { pqrAll }, { dataSources}) => {
            dataSources.pqrAPI.getPqr(pqrAll)
        },
        

},
Mutation: {
    createPQR: (_, { pqrInput }, { dataSources }) => {
dataSources.pqrAPI.createPQR(pqrInput);
},


}
};

module.exports = pqrResolver;