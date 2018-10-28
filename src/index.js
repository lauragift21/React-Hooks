import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = {
    count: 0
  };
  setCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.setCount}>Click me</button>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
