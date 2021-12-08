const { gql } = require('apollo-server');

//revisar para input SignUpInput el telefono. Este puede ser un numero  

const authTypeDefs = gql `
    type Tokens {
        refresh: String!
        access: String!
    }

    type Access {
        access: String!
    }

    input CredentialsInput {
        username: String!
        password: String!
    }

    input SignUpInput {
        username: String!
        nombre: String!
        telefono: String!  
        numero_id: Int!
        ciudad: String!
        direccion: String!       
        email: String!
        password: String!        
    }

    type UserDetail {
        id: Int!
        username: String!
        nombre: String!
        telefono: String!
        numero_id: Int!
        ciudad: String!
        direccion: String!
        email: String!
        password: String!  
        
    }

    type Mutation {
        signUpUser(userInput: SignUpInput): Tokens!
        logIn(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): Access!
    }
    
    type Query {
        userDetailById(userId: Int!): UserDetail!
}`;
module.exports = authTypeDefs;