import { createStore, combineReducers } from 'redux'
import count from './countReducer'
import ecommerce from './ecommerceReducer'

export default createStore(combineReducers({
  count,
  ecommerce
}))