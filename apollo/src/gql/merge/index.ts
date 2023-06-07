import { composeResolvers } from 'npm:@graphql-tools/resolvers-composition'

import resolversComposition from '../composition/resolvers.ts'

import { typeDefs } from '../../domain/schema/index.ts'

import { resolvers } from '../../app/resolvers/index.ts'

const composedResolvers = composeResolvers(resolvers, resolversComposition)

export {
  typeDefs, composedResolvers
}
