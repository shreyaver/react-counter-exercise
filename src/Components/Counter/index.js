import React from 'react';
import Button from '../Button';
import './Counter.css';

const Counter = ({ counterValue, handleAddClick, handleSubtractClick }) => {
  return (
    <div className = 'Counter'> 
    <p className = 'Counter-display'>Counter: {counterValue}</p>
    <Button caption = 'Add' onClick = {handleAddClick} />
    <Button caption = 'Subtract' onClick = {handleSubtractClick}/>
    </div>
  )
}
  export default Counter;
