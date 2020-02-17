import { all } from 'redux-saga/effects'

import uiSagas from './ui'
import cartSagas from './cart'
import countrySagas from './country'
export default function* rootSaga() {
  yield all([...uiSagas, ...countrySagas, ...cartSagas])
}
