FROM node:lts

WORKDIR /usr/src/app

RUN npm install -g yarn

COPY package*.json ./

RUN yarn install

RUN yarn build

COPY . .

EXPOSE 8080

