import { combineReducers } from 'redux'

import ui from './ui'
import country from './country'
import cart from './cart'

const createRootReducer = () =>
  combineReducers({
    ui,
    country,
    cart,
  })

export default createRootReducer
