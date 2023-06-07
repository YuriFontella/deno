import { ApolloServer } from 'npm:@apollo/server'
import { startStandaloneServer } from 'npm:@apollo/server/standalone'

import { makeExecutableSchema } from 'npm:@graphql-tools/schema'

// deno-lint-ignore no-unused-vars
import { graphql } from 'npm:graphql'

import { typeDefs, composedResolvers } from './src/gql/merge/index.ts'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: composedResolvers
})

const server = new ApolloServer({
  schema
})

const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => ({
    token: await req.headers.token,
  }),
  listen: { port: 8000 }
})

console.log(url)
