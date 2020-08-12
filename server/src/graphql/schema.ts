import { merge } from 'lodash';
import { gql, IResolvers, makeExecutableSchema } from 'apollo-server-express';
import test from './test';

const typeDef = gql`
  scalar JSON
  scalar Date
  type Query {
    _version: String
  }
  type Mutation {
    _empty: String
  }
`;

const resolvers: IResolvers = {
  Query: {
    _version: () => '1.0',
  },
  Mutation: {},
};

const schema = makeExecutableSchema({
  typeDefs: [typeDef, test.typeDefs],
  resolvers: merge(resolvers, test.resolvers),
});

export default schema;
