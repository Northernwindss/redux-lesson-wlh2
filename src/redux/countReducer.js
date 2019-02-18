import { INCREASE_COUNT, DECREASE_COUNT, UPDATE_COUNT } from './constants'

let initialState = {
  value: 0
}

export default function(state = initialState, action) {
  switch (action.type) {
    case INCREASE_COUNT:
      return { ...state, value: state.value + 1 }
    case DECREASE_COUNT:
      return { ...state, value: state.value - 1 }
    case UPDATE_COUNT:
      return { ...state, value: action.payload }
    default:
      return state
  }
}