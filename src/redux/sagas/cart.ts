import { takeLatest, select } from 'redux-saga/effects'

export function* setLocalStorage() {
  const state = yield select()
  yield localStorage.setItem('cart', JSON.stringify(state.cart.inCart))
}
export default [takeLatest('*', setLocalStorage)]
