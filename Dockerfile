FROM node:14-alpine

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

WORKDIR /usr/src/app

RUN apk add --update-cache yarn

COPY package*.json yarn.lock ./

RUN set -ex; \
  if [ "$NODE_ENV" = "production" ]; then \
  yarn install --no-cache --frozen-lockfile --production=false; \
  elif [ "$NODE_ENV" = "test" ]; then \
  yarn install --no-cache --frozen-lockfile; \
  elif [ "$NODE_ENV" = "development" ]; then \
  yarn install; \
  fi;

COPY . .

RUN yarn run build --profile

CMD [ "yarn", "run", "start" ]