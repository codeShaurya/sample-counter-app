import React from "react";
import "./App.css";
import Counter from "./components/Counter.js";

class App extends React.Component {
  render() {
    console.log();
    return (
      <div className="App">
      <Counter/>
      </div>
    );
  }
}

export default App;
