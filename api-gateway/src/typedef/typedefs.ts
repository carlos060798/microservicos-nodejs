// typedefs.ts

export const typeDefs = `#graphql
 input EventBrokerInput {
   events: String!
   service: String!
   data: String
 }

 union  Response= Product

 type Product {
   name: String
   price: Int
 }

 type Query {
   service: String!
 }

 type Mutation {
   sendEvent(input: EventBrokerInput): Response!
   
 }
`;
