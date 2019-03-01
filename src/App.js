import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LeftComponent from "./LeftComponent";
import MiddleComponent from "./MiddleComponent";
import RightComponent from "./RightComponent";
import NavComponent from "./NavComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftComponent />
        <MiddleComponent />
        <RightComponent />
        <NavComponent />
      </div>
    );
  }
}
export default App;
