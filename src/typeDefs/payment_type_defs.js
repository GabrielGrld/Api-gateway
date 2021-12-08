const { gql } = require('apollo-server');

//revisar para input SignUpInput el telefono. Este puede ser un numero  

const paymentTypeDefs = gql `    

    input CreateAccountInput {
        username: String!
        balance: String!
    }

    type AccountDetail{
        username: String!
        balance: String!
        lastChange: String!
    }

    input PaymentInput {
        username: String!
        value: Int!
    }

    type PaymentDetail {
        id: String!
        usernameOrigin: String!
        usernameDestiny: String!
        value: Int!
        date:String!
    }

    type UserPaymentsQuery{
        payments: [paymentDetail]
    }
       


    extend type Mutation {
        createAccount(userInput :CreateAccountInput): AccountDetail!
        createPayment(payment: PaymentInput!): PaymentDetail!
        paymentByUsername(username: String!): [PaymentDetail]
    }
    
    extend type Query {
        accountDetailByUsername(username: String!): AccountDetail!
}`;
module.exports = paymentTypeDefs;