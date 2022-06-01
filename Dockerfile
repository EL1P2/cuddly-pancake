ARG DATABASE_URL
FROM node:lts

WORKDIR /usr/src/app

COPY package-lock*.json .

RUN ["yarn"]

COPY ecosystem.config.js .

COPY . .

RUN ["yarn", "global", "add", "pm2"]

RUN ["npx", "prisma", "generate"]

RUN ["npm", "run", "build"]

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start:migrate:prod"]
