import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';import Delete from "./assets/delete.png";
import "./NumPad.scss";
import { IconButton } from "@mui/material";

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
        <button>
          <DeleteOutlineIcon sx={{color:"red", fontSize:"30px"}}/>
          {/* <img src={Delete} alt="Delete Icon" className="delete-Icon" /> */}
        </button>
      </div>
    </div>
  );
};

export default NumberPad;
