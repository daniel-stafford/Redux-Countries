import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import { AppState } from '../types'
import createRootReducer from './reducers'
import rootSaga from './sagas'

const initState: AppState = {
  country: {
    allCountries: [],
    filteredCountries: [],
    userInput: '',
  },
  ui: {
    dialogOpen: {},
  },
  cart: {
    inCart: [],
  },
}

export default function makeStore(initialState = initState) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware, thunk]
  let composeEnhancers = compose

  const storedAllCountries = localStorage.getItem('allCountries') || ''
  const storedFilteredCountries =
    localStorage.getItem('filteredCountries') || ''
  const storedCart = localStorage.getItem('cart') || ''
  const storedUserInput = localStorage.getItem('userInput') || ''

  if (storedAllCountries)
    initialState.country.allCountries = JSON.parse(storedAllCountries)

  if (storedFilteredCountries)
    initialState.country.filteredCountries = JSON.parse(storedFilteredCountries)
  if (storedCart) initialState.cart.inCart = JSON.parse(storedCart)
  if (storedUserInput)
    initialState.country.userInput = JSON.parse(storedUserInput)

  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  )

  sagaMiddleware.run(rootSaga)

  if ((module as any).hot) {
    ;(module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
