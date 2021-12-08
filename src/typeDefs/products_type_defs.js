const { gql } = require('apollo-server');

//revisar para input SignUpInput el telefono. Este puede ser un numero  

const productsTypeDefs = gql `    

    type productDetail{
        id: Int!
        title: String!
        image: String!
        description: String!
        likes: Int!
    }
    
    extend type Query {
        productsCollection(productsAll: String!): [productDetail]
}`;
module.exports = productsTypeDefs;