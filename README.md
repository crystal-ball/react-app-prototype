<div align="center">
  <img src="./docs/assets/package-header.png" alt="React application prototype">
</div>

---

<div align="center">
  <a href="https://travis-ci.com/crystal-ball/react-app-prototype">
    <img src="https://travis-ci.com/crystal-ball/react-app-prototype.svg?branch=master" alt="Travis build status">
  </a>
  <a href="https://renovatebot.com/">
    <img src="https://img.shields.io/badge/Renovate-enabled-32c3c2.svg" alt="Dependency versions managed by Renovate" />
  </a>
  <a href="https://github.com/crystal-ball/react-app-prototype#zenhub">
    <img src="https://img.shields.io/badge/shipping_faster_with-ZenHub-5e60ba.svg?style=flat-square" alt="ZenHub" />
  </a>
  <a href="https://prettier.io/">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg" alt="Prettier">
  </a>

  <br />
  <a href="https://github.com/crystal-ball">
    <img src="https://img.shields.io/badge/%F0%9F%94%AE%E2%9C%A8-contains_magic-D831D7.svg" alt="Contains magic" />
  </a>
  <a href="https://github.com/crystal-ball/crystal-ball.github.io">
    <img src="https://img.shields.io/badge/%F0%9F%92%96%F0%9F%8C%88-full_of_love-F5499E.svg" alt="Full of love" />
  </a>
</div>

_Prototype React application for Crystal Ball Projects reference and
experimentation_

## ⚙️ Setup

```
npm install
npm start
```

## Testing workflows

The project includes 3 types of testing: static linting, unit testing and
acceptance testing.

- _Static linting_ uses ESLint with the `eslint-config-eloquence` ruleset.
  - `npm run test:lint`
- _Unit testing_ uses Jest with `@testing-library/react` and is configured in
  `jest.config.js`
  - `npm run test:unit`
  - `npm run test:watch`
- _Acceptance testing_ uses Cypress inside of a Docker Compose environment
  - `npm run test:acceptance`

#### Testing patterns

- _React Router_ management requires the addition of a `MemoryRouter` (reference
  the Header component test file)

## Development workflows

Start the webpack development server

```
npm start
```

## Formatting

All JS, JSON, SCSS and markdown files are required to be formatted by Prettier
and can be formatted using the `format` npm command.

## Notes

_Miscellaneous project notes and explanations_

### Project dependencies

- Jest IntelliSense isn't working unless the `@types/jest` package is installed
  as a project dependency.
