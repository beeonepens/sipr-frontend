# SIPR Frontend Monorepo

## What's inside?

This monorepo is powered by [turborepo](https://turborepo.org/) and [pnpm](https://pnpm.io). It includes the following packages/apps:

### Apps and Packages

- `admin-web`: a [Next.js](https://nextjs.org) app for admin user
- `user-web`: another [Next.js](https://nextjs.org) app for normal user
- `ui`: collections of React component shared by both `admin-web` and `user-web` applications
- `config`: shared `eslint` configurations
- `tsconfig`: shared `tsconfig.json` configuration

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Vitest](https://vitest.dev/) for unit testing
- [Cypress](https://www.cypress.io/) for integration & end-to-end testing

## Contribution Setup

1. Make sure you have [Node.js](https://nodejs.org/en/) Installed (LTS 16 is recommended)
2. Clone this repository
3. Open terminal in project directory
4. Install PNPM package manager using : `npm install -g pnpm@next-7`
5. Install project dependency using : `pnpm install`
6. To run this project:
   - In project root directory, run `pnpm run dev` to start booth app in dev mode
   - To run each app separately, run `pnpm run dev` in each app directory (/apps/app-name)
7. To run unit test in this project:
   - In project root directory, run `pnpm run test` to start unit testing suite for booth app
   - To test each app separately, run `pnpm run test` in each app directory (/apps/app-name)
8. To run integration test in this project:
   - In project root directory, run `pnpm run cypress` to start integration testing suite for booth app
   - To test each app separately, run `pnpm run cypress` in each app directory (/apps/app-name)
