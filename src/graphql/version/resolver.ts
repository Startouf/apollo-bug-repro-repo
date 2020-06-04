const resolvers = {
  Query: {
    version: () => process.env.VERSION || 'undefined-version',
  },
};

export { resolvers };
