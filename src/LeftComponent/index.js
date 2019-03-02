import React, { Component } from "react";
import "./ComponentLeft.css";

class ComponentLeft extends Component {
  render() {
    return (
      <div className="left">
        <div className="left-top">
          <div className="profile-top">top</div>
          <div className="profile-middle">middle</div>
          <div className="profile-bottom">bottom</div>
        </div>
        <div className="left-bottom" />
      </div>
    );
  }
}

export default ComponentLeft;
