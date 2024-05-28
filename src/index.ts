import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from "./resolvers/resolvers.js";
import { readFileSync } from 'fs';

const typeDefs = readFileSync('./src/graphql/config.graphqls', { encoding: 'utf-8' });
console.log(typeDefs);

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
