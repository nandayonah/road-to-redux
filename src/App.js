import React from "react";
import "./styles.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1
    };

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement() {
    this.setState((state) => ({ count: state.count + 1 }));
  }

  onDecrement() {
    this.setState((state) => ({ count: state.count - 1 }));
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
