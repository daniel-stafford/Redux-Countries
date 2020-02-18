import { Dispatch } from 'redux'

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CartActions,
  Country,
  FETCH_CART,
} from '../../types'

export function fetchCart(cart: Country[]): CartActions {
  return {
    type: FETCH_CART,
    payload: cart,
  }
}

export function addToCart(country: Country): CartActions {
  return {
    type: ADD_TO_CART,
    payload: { country },
  }
}

export function removeCart(country: Country): CartActions {
  return {
    type: REMOVE_FROM_CART,
    payload: { country },
  }
}

export function fetchCartThunk() {
  return async function(dispatch: Dispatch) {
    const storedCart = localStorage.getItem('cart') || ''
    if (!!storedCart) return dispatch(fetchCart(JSON.parse(storedCart)))
    return dispatch(fetchCart([]))
  }
}
