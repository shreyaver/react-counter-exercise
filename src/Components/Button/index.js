import React, { Component } from 'react';
import './Button.css';

// class Button extends Component {
//   render() {
//     const buttonStyles = {
//       color: '#fff'
//     }
//     return (<button type="button" className="button" style={buttonStyles} onClick={this.props.onClick}>{this.props.caption}</button>)
//   }
// }
const Button = (props) => {
  const buttonStyles = {
    color: '#fff'
  }
  return (
    <button type="button" className="button" style={buttonStyles} onClick={props.onClick}>
      {props.caption}
    </button>
  );
}
export default Button;