import {
  CartState,
  CartActions,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from '../../types'

export default function cart(
  state: CartState = {
    cart: [],
  },
  action: CartActions,
): CartState {
  switch (action.type) {
    case ADD_TO_CART: {
      const { country } = action.payload
      if (state.cart.find(c => c.name === country.name)) {
        return state
      }
      return { ...state, cart: [...state.cart, country] }
    }
    case REMOVE_FROM_CART: {
      const { country } = action.payload
      const index = state.cart.findIndex(c => c.name === country.name)
      if (index >= 0) {
        state.cart.splice(index, 1)
        return { ...state, cart: [...state.cart] }
      }
      return state
    }
    default:
      return state
  }
}
