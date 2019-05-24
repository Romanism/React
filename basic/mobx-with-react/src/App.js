import React, { Component } from "react";
import Counter from "./components/Counter";
import CounterDeco from "./components/CounterDeco";

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <CounterDeco />
      </div>
    );
  }
}

export default App;
