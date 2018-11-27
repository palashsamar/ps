import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Increment from "./increment";
import Decrement from "./decrement";
import List from "./list";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  onChangecounter(n) {
    this.setState({
      counter: n
    });
  }

  renderSquare(i) {
    return <Decrement user={this.state.counter} />;
  }

  render() {
    return (
      <div>
        <h1>Hello Hiration Interns</h1>
        <h2>Lets some miracle!</h2>
        <h3>{this.state.counter}</h3>
        <Increment
          user={this.state.counter}
          changecounter={this.onChangecounter.bind(this)}
        />
        <Decrement
          user={this.props.user}
          changecounter={this.onChangecounter.bind(this)}
        />
        <hr />
        <hr />
        <p>List of Items...</p>
        <List />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
