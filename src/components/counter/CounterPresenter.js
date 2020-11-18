import React from "react";

function CounterPresenter(props) {
  return (
    <div>
      <p>{props.count}</p>
      <button onClick={props.onIncrement}>Increment</button>
      <button onClick={props.onDecrement}>Decrement</button>
    </div>
  );
}

export default CounterPresenter;
