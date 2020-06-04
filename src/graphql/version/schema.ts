/* graphql-server-boilerplate
Copyright (c) 2019-present NAVER Corp.
MIT license */
import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolver';
import { typeDefs } from './type';

const versionSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export { versionSchema };
