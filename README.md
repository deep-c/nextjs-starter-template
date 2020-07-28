This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Create .env file

```bash
# General
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

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
