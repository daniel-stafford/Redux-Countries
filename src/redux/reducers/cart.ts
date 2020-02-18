import {
  CartState,
  CartActions,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from '../../types'

export default function cart(
  state: CartState = {
    inCart: [],
  },
  action: CartActions,
): CartState {
  switch (action.type) {
    case ADD_TO_CART: {
      const { country } = action.payload
      if (state.inCart.find(c => c.name === country.name)) {
        return state
      }
      return { ...state, inCart: [...state.inCart, country] }
    }
    case REMOVE_FROM_CART: {
      const { country } = action.payload
      const index = state.inCart.findIndex(c => c.name === country.name)
      if (index >= 0) {
        state.inCart.splice(index, 1)
        return { ...state, inCart: [...state.inCart] }
      }
      return state
    }
    default:
      return state
  }
}
