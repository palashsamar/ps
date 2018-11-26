import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  incOne = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  descOne = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incOne}>+1</button>
        <button onClick={this.descOne}>-1</button>
        <h2>{this.state.counter}</h2>
      </div>
    );
  }
}

export default Counter;
