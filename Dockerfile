FROM node:16.20.0-slim

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN NODE_OPTIONS="--max-old-space-size=8192" yarn build

EXPOSE 5173

CMD ["yarn", "dev"]
