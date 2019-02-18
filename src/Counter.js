import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateCount, decreaseCount, increaseCount } from './redux/actions'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      userInput: 0
    }
  }

  handleUserInput = e => {
    this.setState({
      userInput: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>the count is: {this.props.count}</h1>
        <button onClick={this.props.increaseCount}>increase count</button>
        <button onClick={this.props.decreaseCount}>decrease count</button>
        <input type="number" placeholder="count" onChange={this.handleUserInput}/>
        <button onClick={() => this.props.updateCount(this.state.userInput)}>update count</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(111111, state)
  return {
    count: state.count.value
  }
}

export default connect(mapStateToProps, { increaseCount, decreaseCount, updateCount })(Counter)