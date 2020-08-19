import { GraphQLServer } from 'graphql-yoga';
import { typeDefs, resolvers } from './graphql';
import { initialize, session } from 'passport';
import userController from './userController';
import logger from 'morgan';
import './passport';
import '../env';

const PORT = process.env.PORT || 3000;
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: ({ request }) => {
    return { user: request.user };
  },
});
server.express.use(logger('dev'));
server.express.use(initialize());
server.express.use(session());

server.express.use('/api', userController);

server.start({ port: PORT, endpoint: '/graphql', playground: '/graphql' }, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
