FROM node:14-alpine

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

WORKDIR /usr/src/app

RUN apk add --no-cache yarn

COPY package*.json yarn.lock ./

RUN set -ex; \
  if [ "$NODE_ENV" = "production" ]; then \
    yarn install --no-cache --frozen-lockfile --production; \
  elif [ "$NODE_ENV" = "test" ]; then \
    yarn install --no-cache --frozen-lockfile; \
  elif [ "$NODE_ENV" = "development" ]; then \
    yarn install; \
  fi;

#Temp step since we use a special fork of next-auth for testing
RUN cd ./node_modules/next-auth && npm i && npm run build && cd ../..

COPY . .

RUN npm run build

CMD [ "npm", "start" ]