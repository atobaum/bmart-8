import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { ApolloServer } from 'apollo-server-express';
import schema from './graphql/schema';
import config from './config';

const app = express();
export type ApolloContext = {};

const apollo = new ApolloServer({
  schema,
  context: async ({ ctx }: any) => {
    ctx.a = 1;
    try {
      // await consumeUser(ctx);
      return {
        // loaders: createLoaders(),
      };
    } catch (e) {
      return {};
    }
  },
  tracing: process.env.NODE_ENV === 'development',
});

apollo.applyMiddleware({ app });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// error handler
app.use((err: any, req: any, res: any) => {
  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

app.listen(config.port, () => {
  console.log('Server start to listen port ' + config.port);
});

module.exports = app;
