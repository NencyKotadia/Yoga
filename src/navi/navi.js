import React from "react";
import "./navi.css";

function navi() {
  return (
    <nav className="navigation_bar">
      <div className="nav_1">
        <div className="nav-logo">alo</div>
      </div>
      <div className="nav_2">
        <div className="nav-manu">Home</div>
        <div className="nav-manu">Why us??</div>
        <div className="nav-manu">Our Trainers</div>
        <div className="nav-manu">Reviews</div>
      </div>
      <div className="nav_3">Log in</div>
    </nav>
  );
}

export default navi;
