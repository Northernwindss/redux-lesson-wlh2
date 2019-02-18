import { UPDATE_COUNT, DECREASE_COUNT, INCREASE_COUNT, ADD_ITEM_TO_CART } from './constants'

export function increaseCount() {
  return {
    type: INCREASE_COUNT
  }
}

export function decreaseCount() {
  return {
    type: DECREASE_COUNT
  }
}

export function updateCount(count) {
  return {
    type: UPDATE_COUNT,
    payload: count
  }
}

export function addItemToCart(item) {
  return {
    type: ADD_ITEM_TO_CART,
    payload: item
  }
}