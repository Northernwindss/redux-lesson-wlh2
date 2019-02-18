import React from 'react'
import { connect } from 'react-redux'

function Header(props) {
  return (
    <div style={{width: '100%', height: 80, display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', top: 0}}>
      <h1>Store Logo</h1>
      <div>
        cart items: {props.cart.length}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    cart: state.ecommerce.cart
  }
}

export default connect(mapStateToProps)(Header)