import React from "react";

class Increment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.user
    };
  }

  incOne() {
    this.setState({
      age: this.state.age + 1
    });
    this.props.changecounter(this.state.age);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.incOne()}>+1</button>
      </div>
    );
  }
}

export default Increment;
