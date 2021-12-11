const paymentResolver = {

    Query: {
        accountDetailByUsername: (_, { username }, { dataSources }) => {
            console.log("Aqui estoy en PaymentResolver OJO");
            console.log(dataSources.paymentAPI.accountDetailByUsername(username));
            console.log ("What is a promise");
            console.log("-------------------------------------------");

            dataSources.paymentAPI.accountDetailByUsername(username);
        },
        paymentsByUsername: (_, { username }, { dataSources}) => {
            dataSources.paymentApi.paymentsByUsername(username);
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