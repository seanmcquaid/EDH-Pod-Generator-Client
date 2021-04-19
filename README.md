# EDH Pod Generator - Client

## Project Setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Run your end-to-end tests

```
yarn test:e2e
```

##

## Architecture

- Vue.js
- Vuex
- Vue Router

## Testing Strategy

### E2E Testing

Cypress.io was used for E2E testing for actually testing user flows. I set up mocks with appropriate fixture files associated with them as to remove any dependency on the back end. This helped create very stable tests that helped while doing refactoring.

### Unit Testing

I used Jest to unit test primarily my associated store functions. I felt as though the majority of user behavior was covered from my E2E tests.
