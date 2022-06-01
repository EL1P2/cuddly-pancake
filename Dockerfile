FROM node:lts

WORKDIR /usr/src/app

RUN npm install -g pm2 @nestjs/cli

COPY package*.json .

RUN yarn install

COPY ecosystem.config.js .

COPY . .

RUN ls -l

RUN yarn build

EXPOSE 3000

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]


