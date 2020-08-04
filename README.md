## Getting Started

Install the following nodejs modules:

```bash
npm install -g lint-staged husky
# or
yarn global add lint-staged husky
```

Create .env file

```bash
# General
NODE_ENV=development
SECRET=3qkjiJFQO(@)adqer/
DEBUG=true

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

```bash
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
├─ tests # Unit tests
│  └─ fixtures # TypesORM seed factories and seeds
│  └─ src # Test files
├─ e2e # End to end tests
├─ config # Configuration for project tools
│  └─ jest
├─ public # Static assets
├─ .env # Environment variables
...
```

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

Created from [deep-c/nextjs-app-template](https://github.com/deep-c/nextjs-app-template)
