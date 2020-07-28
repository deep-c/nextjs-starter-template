FROM node:14-alpine

RUN apk add yarn

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN npm run build

CMD [ "npm", "start" ]