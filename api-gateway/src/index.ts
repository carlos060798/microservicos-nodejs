import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './typedef/typedefs';
import { resolvers } from './resolvers/resolvers';
import dotenv from 'dotenv';
import { EventBrokerAPI } from './datasources/eventBroker';
dotenv.config();



const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server,{
  listen: {
    port: parseInt(process.env.PORT as string),
  },
  context: async () => {
    const {cache} = server;
    return{
      dataSources: {
        eventBrokerAPI: new EventBrokerAPI()
      },
      }
    }
  }
);

console.log(`🚀 Server ready at ${url}`);