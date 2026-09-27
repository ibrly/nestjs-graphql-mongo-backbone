# nestjs-graphql-mongo-backbone

A NestJS starter intended to grow into a GraphQL + MongoDB backbone. It is currently at the scaffold stage: a single `AppController` and `AppService`, Docker for development, and Jest set up for tests.

## Roadmap

- [ ] GraphQL module (`@nestjs/graphql` with the Apollo driver, code-first schema)
- [ ] MongoDB via `@nestjs/mongoose`
- [ ] Example resource with queries, mutations and resolvers
- [ ] JWT authentication guard for resolvers
- [ ] Config validation for environment variables
- [ ] Unit and e2e tests for resolvers
- [ ] GitHub Actions CI

## Getting started

```bash
cp app.env.example app.env
docker compose up --build
```

Or without Docker:

```bash
npm install
npm run start:dev
```

The server listens on `http://localhost:3000`.

## Scripts

```bash
npm run start:dev   # watch mode
npm run build       # compile to dist
npm run lint        # eslint with --fix
npm test            # unit tests
npm run test:e2e    # end-to-end tests
```

## License

MIT
