import React, { Component } from "react";
import "./ComponentMiddle.css";
import middleBottom from "./t-middle-bottom.PNG";
import middleTop from "./t-middle-top.PNG";

class ComponentMiddle extends Component {
  render() {
    return (
      <div className="middle">
        <div className="middle-top">
          <img src={middleTop} alt="t-feed-search" />
        </div>
        <div className="middle-bottom">
          <img src={middleBottom} alt="t-feed" />
        </div>
      </div>
    );
  }
}

export default ComponentMiddle;
