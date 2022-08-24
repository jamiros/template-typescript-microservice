# Build app with yarn.
FROM node:18-alpine as builder

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json yarn.lock ./

RUN yarn config set unsafe-perm true

RUN yarn global add typescript
RUN yarn global add ts-node
USER node
RUN yarn install --frozen-lockfile

COPY --chown=node:node . .
RUN yarn build

# Run Build
FROM node:18-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json yarn.lock ./

USER node
RUN yarn install --production --frozen-lockfile
COPY --from=builder /home/node/app/bin ./bin

COPY --chown=node:node  /config ./config

EXPOSE $PORT
CMD [ "node", "./bin/app.js" ]