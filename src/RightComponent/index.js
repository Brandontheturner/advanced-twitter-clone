import React, { Component } from "react";
import "./ComponentRight.css";
import rightTop from "./t-right-top.PNG";
import rightBottom from "./t-right-bottom.PNG";

class ComponentRight extends Component {
  render() {
    return (
      <div className="right">
        <div className="right-top">
          <img src={rightTop} alt="Marketing Banner" />
        </div>
        <div className="right-bottom">
          <img src={rightBottom} alt="Info" />
        </div>
      </div>
    );
  }
}

export default ComponentRight;
