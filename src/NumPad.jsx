import React from "react";
import "./NumPad.scss";

const NumberPad = () => {
  const handleClick = (value) => {
    console.log(value);
  };

  return (
    <div className="number-pad">
      <div className="row">
        <button onClick={() => handleClick(1)}>1</button>
        <button onClick={() => handleClick(2)}>2</button>
        <button onClick={() => handleClick(3)}>3</button>
      </div>
      <div className="row">
        <button onClick={() => handleClick(4)}>4</button>
        <button onClick={() => handleClick(5)}>5</button>
        <button onClick={() => handleClick(6)}>6</button>
      </div>
      <div className="row">
        <button onClick={() => handleClick(7)}>7</button>
        <button onClick={() => handleClick(8)}>8</button>
        <button onClick={() => handleClick(9)}>9</button>
      </div>
      <div className="row">
        <button className="new-game-button">New Game</button>
      </div>
    </div>
  );
};

export default NumberPad;
