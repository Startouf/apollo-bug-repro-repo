import { GraphQLSchema } from 'graphql';
/* graphql-server-boilerplate
Copyright (c) 2019-present NAVER Corp.
MIT license */
import { mergeSchemas } from 'graphql-tools';
import { mockSchema } from './mock/schema';
import { versionSchema } from './version/schema';

export const schema: GraphQLSchema = mergeSchemas({
  schemas: [versionSchema, mockSchema],
});
