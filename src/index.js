import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Counter from "./counter";

function App() {
  return (
    <div className="App">
      <h1>Hello Hiration Interns</h1>
      <h2>Lets some miracle!</h2>
      <h3>
        {" "}
        <i>Task 1 </i>{" "}
      </h3>
      <Counter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
