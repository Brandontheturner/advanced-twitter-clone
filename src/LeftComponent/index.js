import React, { Component } from "react";
import topLeft from "./images/t-top-left.PNG";
import topMiddle from "./images/t-left-middle.PNG";
import topBottom from "./images/t-left-bottom.PNG";

class ComponentLeft extends Component {
  render() {
    return (
      <div className="left">
        <div className="left-top">
          <img src={topLeft} alt="Profile Image" />
        </div>
        <div className="left-middle">
          <img src={topMiddle} alt="Profile Info" />
        </div>
        <div className="left-bottom">
          <img src={topBottom} alt="Recommend" />
        </div>
      </div>
    );
  }
}

export default ComponentLeft;
