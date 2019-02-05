import React, { Component } from 'react';
import Button from '../Button';
import './Counter.css';

class Counter extends Component {
  state = {counter : this.props.counterVal};
  increment = () => {
    this.setState((state, props) => ({
      counter: this.state.counter + this.props.incrementVal
    }));
  }
  decrement = () => {
    this.setState((state, props) => ({
      counter: this.state.counter - this.props.decrementVal
    }));
  }
  
  render() {
      return (
      <div className = 'main'> 
      <p>Counter: {this.state.counter}</p>
      <Button caption = 'ADD' onClick = {this.increment}/>
      <Button caption = 'SUBTRACT' onClick = {this.decrement}/>
      </div>
      )
    }
  }
  export default Counter;
