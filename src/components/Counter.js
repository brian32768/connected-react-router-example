// Counter component

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/counter'

const Counter = (props) => {
    console.log("Counter", props);
    return (
      <>
      <h1>Counter</h1>
        <button onClick={props.increment}>+</button>
        Counter: {props.counter}
        <button onClick={props.decrement}>-</button>
      </>
    )
}

Counter.propTypes = {
  counter: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  counter: state.count.counter,
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
