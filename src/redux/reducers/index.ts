import { combineReducers } from 'redux'

import ui from './ui'
import country from './country'

const createRootReducer = () =>
  combineReducers({
    ui,
    country,
  })

export default createRootReducer
