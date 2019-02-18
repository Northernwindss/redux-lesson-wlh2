import { ADD_ITEM_TO_CART } from './constants'

let initalState = {
  products: [{id: 1, name: 'shirt', imageUrl: 'https://uniqlo.scene7.com/is/image/UNIQLO/goods_36_413497?$prod$', price: 20},
  {id: 2, name: 'pantss', imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQy2w6A9m47am_jVlajFmGaACG68zlBkMChtkwXhotnkiL4PeV3mqO9uVKWwo-cwfNl2zECJKzSOsSfB4_4QAlzEZk3bt1XFe9lepJix_s&usqp=CAE', price: 900}],
  cart: []
}

export default function(state = initalState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return { ...state, cart: [...state.cart, action.payload]}
    default:
      return state;
  }
}