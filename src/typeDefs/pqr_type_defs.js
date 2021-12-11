const { gql } = require('apollo-server');

//revisar para input SignUpInput el telefono. Este puede ser un numero  

const pqrTypeDefs = gql `    

    input CreatePQRInput {
        type: String!
        user: Int!
        product_id: Int!
        content: String!
    }

    type PQRDetail {
        type: String!
        user: Int!
        product_id: Int!
        content: String!
        id: String!
        date: String!
        v:Int!

    } 
    
       


    extend type Mutation {
        createPQR(pqrInput: CreatePQRInput! ): PQRDetail!        
         }
    
    extend type Query {
        pqrCollection(pqrAll: String!): [PQRDetail]
}`;
module.exports = pqrTypeDefs;