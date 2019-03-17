import React from "react";

class Counter extends React.Component {
  state = {
    length: 10,
    height: 10,
    width: 10
  };

  render() {

    let { height, width, length } = this.props;
    console.log(this.props);

    return (
      <>
        <p>this is a Counter</p>
        <h1>height is : {height}</h1>
        <h1>length is : {length}</h1>
        <h1>width is : {width}</h1>
      </>
    );
  }
}

export default Counter;
