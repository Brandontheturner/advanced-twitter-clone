import React, { Component } from "react";
import "./App.css";
import LeftComponent from "./LeftComponent";
import MiddleComponent from "./MiddleComponent";
import RightComponent from "./RightComponent";
import NavComponent from "./NavComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavComponent />
        <div className="body">
          <LeftComponent />
          <MiddleComponent />
          <RightComponent />
        </div>
      </div>
    );
  }
}
export default App;
