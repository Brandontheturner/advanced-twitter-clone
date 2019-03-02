import React, { Component } from "react";
import "./NavComponent.css";
import tNav from "./t-nav.PNG";

class NavComponent extends Component {
  render() {
    return (
      <div className="nav-container">
        <img src={tNav} alt="Nav Bar" />
      </div>
    );
  }
}
export default NavComponent;
