# TypeScript Express API Bootstrap (base / project starter)

This is a repository intended to serve as a starting point if you want to bootstrap a express API project in TypeScript.

## Features

- [TypeScript](https://www.typescriptlang.org/) (v4)
- [ts-node-dev](https://github.com/wclr/ts-node-dev)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/) with:
  - [Simple Import Sort](https://github.com/lydell/eslint-plugin-simple-import-sort/)
  - [Import plugin](https://github.com/benmosher/eslint-plugin-import/)
- [Jest](https://jestjs.io) with [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro)
- [GitHub Action workflows](https://github.com/features/actions) set up to run tests and linting on push

## Running the app

```
# install dependencies
npm install

# run in dev mode on port 3000
npm run dev

# generate production build
npm run build

# run generated content in dist folder on port 3000
npm run start
```

### Create database Postgres en Docker
docker volume create postgres_estudiantes
docker run -d --volume postgres_estudiantes:/var/lib/postgresql/data --name postgres_estudiantes -ePOSTGRES_USER=postgres  -e POSTGRES_PASSWORD=pass -e POSTGRES_DB=estudiantes -p 5432:5432 postgres

### Crear tablas por primera vez
Sequelize no crea las tablas por ti. Por eso es necesario ejecutar esta sentencia la primera vez para crearlas

> npx ts-node-dev ./src/create_table.ts 


## Testing
Desde un terminal bash.
- Devuelve todos los registros
  curl localhost:3000/persona|py -mjson.tool
  
### Jest with supertest

```
npm run test
```

## Linting

```
# run linter
npm run lint

# fix lint issues
npm run lint:fix
```
