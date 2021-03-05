import React, { useState } from "react";
import "./Game.css";


const Game = () => {
  
  return (
    <div id="house">
    <div id='front'>
      <span className="roof"></span>
      <span className="triangle"></span>
      <span className="sidewall"></span>
      <div className="wall">
        <span id="top-window"></span>
        <span id="middle-window"></span>
        <span id="door"></span>
      </div>
    </div>
    <div id='garage'>
      <span className="roof"></span>
      <span className="triangle"></span>
      <span className="sidewall"></span>
      <div className="wall"></div>
    </div>
  </div>
  );
};
export default Game;
