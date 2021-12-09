const paymentResolver = {

    Query: {
        accountDetailByUsername: (_, { username }, { dataSources, userIdToken }) => {
            dataSources.paymentAPI.getAccount(username)
        },
        paymentsByUsername: (_, { username }, { dataSources}) => {
            dataSources.paymentApi.paymentsByUsername(username)
},

},
Mutation: {
    createAccount: (_, { userInput }, { dataSources }) => {

const createAccountInput = {
    username:   userInput.username,
    balance:     userInput.balance,
            
}
dataSources.paymentAPI.createAccount(createAccountInput);
},

createPayment: (_, { paymentInput }, { dataSources }) =>
dataSources.paymentAPI.createPayment(paymentInput),

}
};

module.exports = paymentResolver;