import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Person {
    name: String
    hello: String
  }

  extend type Query {
    getPerson: Person
    echo(content: String!): String
  }
`;

const resolvers = {
  Person: {
    hello: (parent: any) => parent.name + '!!!',
  },
  Query: {
    getPerson: () => {
      return {
        name: 'name',
      };
    },
    echo: (parent: any, { content }: any, ctx: any) => {
      console.log(ctx);
      return content + ctx.a;
    },
  },
};

export default { typeDefs, resolvers };
