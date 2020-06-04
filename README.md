# GraphQL Server boilerplate

GraphQL Server boilerplate provides simple and easily adaptable sample code for your GraphQL server.

It is based on Typescript and Apollo Express that are commonly used in GraphQL community

## GraphQL Usage Samples
- Basic  : Basic [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations using mongoose
- Advanced : Chain resolver pattern applying [Paypal Best Practice](https://medium.com/paypal-engineering/graphql-resolvers-best-practices-cd36fdbcef55)
- Mock  : Mock Schema using [GraphQL Mocking](https://www.apollographql.com/docs/graphql-tools/mocking/)

# Quickstart

```bash
pnpm install
```

(Optional) : generate version number from current commit SHA1 or Tag
```bash
# Git tag version or branch name in $VERSION shell variable
if [[ $(git tag --points-at HEAD) ]]; then
  # tag
  VERSION=$(git tag --points-at HEAD);
else
  # branch#sha1
  VERSION="$(git rev-parse --abbrev-ref HEAD 2>/dev/null)#$(git rev-parse --short HEAD)";
fi
echo $VERSION > VERSION
```

```bash
pnpm start
```

To test GraphQL query in your local environment,
Open a browser and connect to GraphQL Playground
> http://localhost:10000/graphql

⚠️ In production environment, it's recommended to run ``pnpm build`` and use transpiled js in``/dist``
