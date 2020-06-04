/* graphql-server-boilerplate
Copyright (c) 2019-present NAVER Corp.
MIT license */
import { createTerminus } from '@godaddy/terminus';
import { ApolloServer } from 'apollo-server-express';
import cookieParser from 'cookie-parser';
import errorhandler from 'errorhandler';
import express from 'express';
import { createServer } from 'http';
import { schema } from '../graphql/schema';
import { logger } from './logger';

function runServer() {
  const app = express();
  const port = process.env.PORT || 3000;

  if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler());
  }

  app.use(cookieParser());

  const apolloServer = new ApolloServer({ schema });
  apolloServer.applyMiddleware({
    app,
    path: '/graphql',
    cors: true,
    bodyParserConfig: true,
  });

  const cleanupOptions = {
    onSignal,
    onShutdown,
    timeout: 10000,
    signals: ['SIGINT', 'SIGTERM'],
  };

  createTerminus(apolloServer, cleanupOptions);

  const httpServer = createServer(app);
  httpServer.listen(port, () => {
    logger.info(`GraphQL server is listening on port ${port}`);
  });
}

async function onSignal() {
  logger.info('server is starting cleanup');
}

async function onShutdown() {
  logger.info('cleanup finished, server is shutting down');
}

export { runServer };
