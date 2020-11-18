import React from "react";
import CounterPresenter from "./CounterPresenter";

class CounterContainer extends React.Component {
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
      <CounterPresenter
        count={this.state.count}
        onIncrement={this.onIncrement}
        onDecrement={this.onDecrement}
      />
    );
  }
}

export default CounterContainer;
