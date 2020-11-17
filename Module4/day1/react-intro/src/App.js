import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import ChildComponent from "./ChildComponent";
import { NewComponenet } from "./NewComponenet";

// A react componenet can be declared in two ways: as functions and as classes

class App extends React.Component {
  state = {
    counter: 0,
    age: 0,
    color: "red",
  };

  changeColor = () => {
    this.setState({
      color: this.state.color === "red" ? "green" : "red",
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => this.changeColor()}>Change Color</button>
          <NewComponenet count={0} color={this.state.color} />
          <NewComponenet count={1} />
          <button
            onClick={() => this.setState({ counter: this.state.counter + 1 })}
          >
            Increment by one
          </button>
          <p style={{ color: this.state.color }}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <ChildComponent strivers="element" counter={this.state.counter} />
          <button onClick={() => this.setState({ age: this.state.age + 2 })}>
            Add age
          </button>
          <ChildComponent strivers="component" age={this.state.age} />
        </header>
      </div>
    );
  }
}

// ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById("root"));
ReactDOM.render(<h1>Hello, strivers</h1>, document.getElementById("root"));

export default App;
