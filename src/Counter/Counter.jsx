import React, { useReducer } from 'react'
import { countIntialState, countReducer } from './counterReducer';
import './counter.css';

const Counter = () => {

  const [state, dispatch] = useReducer(countReducer, countIntialState);

  return (
    <>
      <div>Counter {state?.count}</div>
      <button type="button" onClick={() => dispatch({ type: 'increment'})}>Increment</button>
      <button type="button" onClick={() => dispatch({ type: 'decrement'})}>Decrement</button>
      <button type="button" onClick={() => dispatch({ type: 'reset'})}>Reset</button>

    </>
  )
}

export default Counter;