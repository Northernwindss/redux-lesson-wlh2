import React from 'react'
import { connect } from 'react-redux'

import { addItemToCart } from './redux/actions'

function Products(props) {
  return (
    <div>
      {props.products.map(product => {
        return (
          <div>
            name: {product.name}
            price: ${product.price}
            <img src={product.imageUrl} alt=""/>
            <button onClick={() => props.addItemToCart(product)}>add to cart</button>
          </div>
        )
      })}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    products: state.ecommerce.products
  }
}

export default connect(mapStateToProps, { addItemToCart })(Products)