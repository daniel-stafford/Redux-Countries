import { takeLatest, takeEvery, select } from 'redux-saga/effects'
import { CartActions, ADD_TO_CART, REMOVE_FROM_CART } from '../../types'

export function* setLocalStorage() {
  yield takeEvery(ADD_TO_CART, function*(action: CartActions) {
    const state = yield select()
    console.log('add cart saga running', state)
    yield localStorage.setItem('cart', JSON.stringify(state.cart.inCart))
  })
  yield takeEvery(REMOVE_FROM_CART, function*(action: CartActions) {
    const state = yield select()
    console.log('remove cart saga running', state)
    yield localStorage.setItem('cart', JSON.stringify(state.cart.inCart))
  })
}
export default [takeLatest('*', setLocalStorage)]
