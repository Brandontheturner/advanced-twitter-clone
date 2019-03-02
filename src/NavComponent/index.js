import React, { Component } from "react";
import "./NavComponent.css";

class NavComponent extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="nav-buttons">
          <div className="home">Home</div>
          <div className="moments">Moments</div>
          <div className="notifications">Notifications</div>
          <div className="messages">Messages</div>
        </div>
      </div>
    );
  }
}
export default NavComponent;
