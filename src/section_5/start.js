import React from "react";
import './start.css'
function start() {
  return (
    <div className="start">
      <div className="trainings_1">
        <div className="p1">START</div>
        <div className="p2">YOUR TRAININGS</div>
        <div className="p1">RIGHT NOW!</div>
      </div>
      <div className="trainings_2">
        <form>
          <label
            style={{
              display: "block",
              color: "white",
              fontSize: 20,
              textAlign: "left",
              marginBottom: 15,
            }}
          >
            Name
          </label>
          <input type="text" className="input1" />
          <label
            style={{
              display: "block",
              color: "white",
              fontSize: 20,
              textAlign: "left",
              marginBottom: 15,
            }}
          >
            E-mail
          </label>
          <input type="email" className="input1" />
          <button className="btn">Get It Touch</button>
        </form>
      </div>
    </div>
  );
}

export default start;
