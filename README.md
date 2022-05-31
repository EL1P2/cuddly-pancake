## Description

This is a simple REST API made with [NestJS](https://github.com/nestjs/nest) framework.

## Installation

```bash
$ yarn install
```

## Running the app

### Running the database locally
```bash
# Running postgres on docker locally
$ docker run --name postgres -e POSTGRES_PASSWORD=bnloYXNpbmE= -p 5432:5432-d postgres
```

### Running the development server
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
