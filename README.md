This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Create .env file

```bash
# General
NODE_ENV= development

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

TYPEORM_SYNCHRONIZE=true

TYPEORM_LOGGING=true

TYPEORM_DEBUG= true

```

Run the development environment:

```bash
docker-compose up -d
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Libraries and technologies used

- [Next.js](https://nextjs.org/docs)
- [NextAuth.js](https://github.com/nextauthjs/next-auth)
- [React](https://reactjs.org/docs/getting-started.html)
- [Typescript](https://www.typescriptlang.org/docs/home.html)
- [Jest](https://jestjs.io/docs/en/getting-started.html)
- [Enzyme](https://enzymejs.github.io/enzyme/)
- [ESLint-Typescript](https://github.com/typescript-eslint/typescript-eslint)
- [Prettier](https://prettier.io/docs/en/index.html)
- [Docker](https://docs.docker.com/reference/)
- [Yarn](https://classic.yarnpkg.com/en/docs/)

