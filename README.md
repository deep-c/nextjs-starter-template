## Getting Started

Install the following nodejs modules:

```bash
npm install -g lint-staged
# or
yarn global add lint-staged
```

Create .env file

```bash
# General
NODE_ENV=development
SECRET=3qkjiJFQO(@)adqer/
DEBUG=true
APP_PORT=3000

# Sentry
NEXT_PUBLIC_SENTRY_DSN=
NEXT_PUBLIC_SENTRY_SERVER_ROOT_DIR=
SENTRY_ORG=
SENTRY_PROJECT=
SENTRY_AUTH_TOKEN=

# Auth
NEXTAUTH_URL=http://localhost:3000
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
AUTH0_DOMAIN=

# Database
TYPEORM_CONNECTION=postgres
TYPEORM_HOST=db
TYPEORM_USERNAME=postgres
TYPEORM_PASSWORD=password
TYPEORM_DATABASE=nextapp
TYPEORM_PORT=5432
TYPEORM_SYNCHRONIZE=false
TYPEORM_ENTITIES=src/models/*.ts
TYPEORM_ENTITIES_DIR=src/models
TYPEORM_MIGRATIONS=src/migrations/*ts
TYPEORM_MIGRATIONS_DIR=src/migrations
TYPEORM_LOGGING=true
TYPEORM_DEBUG=true
TYPEORM_SEEDING_FACTORIES=fixtures/factories/*.ts
TYPEORM_SEEDING_SEEDS=fixtures/seeds/*.ts
```

Run the development environment:

```
docker-compose up -d

# Run migrations
docker-compose exec app npm run typeorm migration:run

# Apply fixtures (if any)
docker-compose exec app npm run seed:run

# Currently there isnt a straightforward way to mount the node_modules folder on the host
# Manually copy the folder such that Typescript and IDE's can find the type declarations
# If changes are made to node_modules inside the container run the command again.
# https://stackoverflow.com/questions/38425996/docker-compose-volume-on-node-modules-but-is-empty
sudo docker cp "$(docker-compose ps -q app)":/usr/src/app/node_modules .
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```bash
nextjs-app-template
├─ src
│  ├─ common # Initializers, app config etc. E.g Store creation
│  ├─ components # Common components used within multiple features
│  ├─ features # Components that are larger and form the basis of a feature
│  ├─ migrations # TypeORM migration files
│  ├─ models # TypeORM models
│  ├─ repositories # TypeORM model repositories
│  ├─ pages # NextJs Pages and APIs
│  │  ├─ _app.tsx # Root React component
│  │  ├─ api
│  │  │  ├─ auth # NextAuthJs routes
│  │  └─ index.tsx # Index Page
├─ fixtures # TypeORM seed
│  ├─ factories # TypeORM seed factories
│  └─ seeds # TypeORM seed seeders
├─ .coverage # Test coverage report directory
│  └─ ...
├─ tests # Unit/Integration tests
│  └─ fixtures # TypesORM seed factories and seeds
│  └─ src # Test files
├─ e2e # End to end tests
├─ config # Configuration for project tools
│  └─ jest
├─ public # Static assets
├─ .env # Environment variables
...
```

## Development

New libraries should be added through the container using `yarn` and after adding the new package the `node_modules` folder should be copied out to make any typings available and make your IDE happy.

```
docker-compose exec app yarn add
sudo docker cp "$(docker-compose ps -q app)":/usr/src/app/node_modules .
```

New migrations can be generated using:

```
docker-compose exec app npm run typeorm migration:generate -n {name}
```

The last applied migration can be reverted using:

```
docker-compose exec app npm run typeorm migration:revert
```

See [TypeORM CLI](https://typeorm.io/#/using-cli) docs for more information on other options.

To debug the dev server can be attached to on port `5858`.

The follwing launch.json can be added to debug via `vs-code`:

```
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "attach",
            "name": "Attach to dev",
            "remoteRoot": "/usr/src/app",
            "skipFiles": ["<node_internals>/**"],
            "port": 5858,
            "restart": true
        }
    ]
}
```

## Fixtures

Fixtures to load can be placed in the `fixtures` directory above and implmented according to [TypeORM Seeding](https://github.com/w3tecch/typeorm-seeding#-table-of-contents). Running the following command will apply them:

```
docker-compose exec app npm run seed:run
```

## Testing

```
docker-compose exec app npm run test
# or
docker-compose exec app npm run test:watch
```

Tests can be grouped using group prefixing using [jest-runner-groups](https://github.com/eugene-manuilov/jest-runner-groups) and run via:

```
docker-compose exec app npm run test -- --group=prefix
```

Fixtures for integration tests can be placed in the fixtures folder and be setup using [TypeORM seeding](https://github.com/w3tecch/typeorm-seeding#-seeding-data-in-testing).

Coverage can be generated into the `.coverage` folder using:

```
docker-compose exec app npm run test:coverage
# or
docker-compose exec app npm run test -- --coverage
```

## Error Reporting

Sentry is integrated and if the Sentry environment variables are set will get pushed. Errors are tracked by the git tag or git commit when building for production. Sentry will only work when running `NODE_ENV=production`.

## Libraries and technologies used

-   [Next.js](https://nextjs.org/docs)
-   [NextAuth.js](https://github.com/nextauthjs/next-auth)
-   [TypeORM](https://typeorm.io/#/)
-   [TypeORM Seeding](https://github.com/w3tecch/typeorm-seeding)
-   [React](https://reactjs.org/docs/getting-started.html)
-   [Redux](https://redux-toolkit.js.org/introduction/quick-start)
-   [Typescript](https://www.typescriptlang.org/docs/home.html)
-   [Jest](https://jestjs.io/docs/en/getting-started.html)
-   [Enzyme](https://enzymejs.github.io/enzyme/)
-   [ESLint-Typescript](https://github.com/typescript-eslint/typescript-eslint)
-   [Prettier](https://prettier.io/docs/en/index.html)
-   [Docker](https://docs.docker.com/reference/)
-   [Yarn](https://classic.yarnpkg.com/en/docs/)
-   [Sentry.io](https://sentry.io/)

Created from [deep-c/nextjs-app-template](https://github.com/deep-c/nextjs-app-template)
