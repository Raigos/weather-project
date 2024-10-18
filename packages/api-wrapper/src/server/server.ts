import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import gql from 'graphql-tag';
import { resolvers } from '../resolver/weatherResolvers.js';
import { Resolvers } from '../resolver/resolvers-types.js';

// Import the schema as a string
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const schemaPath = join(__dirname, '..', '..', 'src', 'schema', 'schema.graphql');
const typeDefs = gql(readFileSync(schemaPath, 'utf-8'));

// Create the Apollo Server with explicit typing
const server = new ApolloServer<{}>({
  typeDefs,
  resolvers: resolvers as Resolvers,
});

// Start the server
const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    context: async () => ({}),
    listen: { port: 4000 },
  });
  console.log(`🚀 Server ready at ${url}`);
};

startServer();
