import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CartActions,
  Country,
} from '../../types'

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
