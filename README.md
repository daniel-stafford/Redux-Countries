# Fast Track React app with TypeScript & Redux 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation
You should use either `npm` or `yarn` but not both. It's recommeded to use `yarn`

You'll need to install at least following packages:
```
yarn add redux react-redux redux-thunk redux-saga @types/react-redux @types/redux-thunk @types/redux-saga react-router-dom @types/react-router-dom
```

## Folder structure
* `src/components`: For React components. For each component, it's better to put it in a separate folder. For example:
  ```
  src/components/Button/index.tsx
  src/components/Button/Button.scss
  src/components/Button/Button.stories.tsx
  src/components/Button/Button.test.tsx
  ```

* `src/hooks`: This is for custom hooks. For example:
  ```
  src/hooks/useCountries.ts
  src/hooks/useUser.ts
  ```

* `src/redux`: This is for everything (such as actions, reducers, sagas etc) related to Redux
  * `src/redux/actions`: For Redux actions
  * `src/redux/reducers`: For Redux reducers
  * `src/redux/sagas`: For Redux sagas

  If there are multiple un-related features, split action/reducer/saga into different files. For example:
  ```
  src/redux/actions/product.ts
  src/redux/actions/order.ts
  src/redux/actions/ui.ts
  ```
  ```
  src/redux/reducers/product.ts
  src/redux/reducers/order.ts
  src/redux/actions/ui.ts
  ```
  ```
  src/redux/sagas/product.ts
  src/redux/sagas/order.ts
  src/redux/sagas/ui.ts
  ```

* `src/pages`: For different pages (views) when using [React router](https://reacttraining.com/react-router/web/guides/quick-start). For example:
  ```
  src/pages/Home.tsx
  src/pages/Product.tsx
  ```
  If there are more files than just page's `*.tsx`, a folder structure can be used. For example:
  ```
  src/pages/Home/index.tsx
  src/pages/Home/Home.scss
  ```

* `src/types.ts`: TypeScript's type definitions. For small apps, you can put definitions of all types, interfaces etc and even Redux's actions, action creators, states here.

This template is suitable for rather small apps. For bigger apps, a better & more organized way is to split the folder structure into features, something like:
  ```
  sr/feature1
  --components
  --redux
  ----action.ts
  ----reducer.ts
  ----saga.ts

  src/feature2
  --components
  --redux
  ----action.ts
  ----reducer.ts
  ----saga.ts

  src/redux
  --action.ts
  --reducer.ts
  --saga.ts
  --store.ts
  ```
