import React from 'react'
import { connect } from 'react-redux'

function Count(props) {
  return (
    <div>
      <h1>Current Count: {props.count}</h1>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    count: state.count.value
  }
}

export default connect(mapStateToProps)(Count)