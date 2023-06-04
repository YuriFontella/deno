import { ApolloServer } from 'npm:@apollo/server'
import { startStandaloneServer } from 'npm:@apollo/server/standalone'

// deno-lint-ignore no-unused-vars
import { graphql } from 'npm:graphql'

import { typeDefs } from './schema.ts'
import { resolvers } from './resolvers.ts'

const server = new ApolloServer({
  typeDefs, resolvers
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 8000 }
})

console.log(url)
