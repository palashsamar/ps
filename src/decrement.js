import React from "react";

class Decrement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.user
    };
  }

  DesOne() {
    this.setState({
      age: this.state.age - 1
    });
    this.props.changecounter(this.state.age);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.DesOne()}>-1</button>
      </div>
    );
  }
}

export default Decrement;
