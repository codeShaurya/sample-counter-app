import React from "react";

class Counter extends React.Component {
  state = {
    value: 0
  };

  increase = () => {
    console.log("+1");
    this.setState({ value: this.state.value + 1 });
  };

  dec = () => {
    console.log("-1");
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    let { value } = this.state;

    return (
      <>
        <button onClick={this.increase}>+</button>
        <h1>{value}</h1>
        <button onClick={this.dec}>-</button>
      </>
    );
  }
}

export default Counter;
