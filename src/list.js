import React from "react";

const numbers = [1, 2, 3, 4, 5, 6];

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: props.numbers
    };
  }
  render() {
    const listItems = numbers.map((numbers, i) => <li key={i}>{numbers}</li>);

    return <ul>{listItems}</ul>;
  }
}

export default List;
