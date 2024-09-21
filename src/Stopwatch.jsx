import React, { useState, useEffect, useRef } from "react";
import "./Stopwatch.scss";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ReplayCircleFilledRoundedIcon from "@mui/icons-material/ReplayCircleFilledRounded";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import TimerSharpIcon from "@mui/icons-material/TimerSharp";
4;
import stopwa from "./assets/stopwatch.gif";

const Stopwatch = ({ play, setPlay }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [isRunning]);

  const handleStart = () => {
    setPlay(!play);
    setIsRunning(true);
  };

  const handleStop = () => {
    setPlay(!play);
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setPlay(!play);
    setTime(0);
  };

  const formatTime = (time) => {
    const hours = String(Math.floor((time / 3600000) % 60)).padStart(2, "0");
    const minutes = String(Math.floor((time / 60000) % 60)).padStart(2, "0");
    const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, "0");
    const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(
      2,
      "0"
    );
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div className="stopwatch">
      {/* <TimerSharpIcon sx={{ color: "red", fontSize: "45px" }} /> */}

      <img
        src={stopwa}
        alt="Stopwatch"
        style={{
          width: "80px",
          height: "auto",
          visibility: play ? "hidden" : "visible",        }}
      />

      <div className="display">
        {formatTime(time)
          .split(".")
          .map((part, index) => (
            <span key={index} className={index === 1 ? "millis" : ""}>
              {part}
              {index === 0 && " "}
            </span>
          ))}
      </div>

      <div className="controls">
        {play ? (
          <Tooltip title="Play">
            <IconButton>
              <PlayArrowOutlinedIcon
                onClick={handleStart}
                sx={{ color: "#007bff", fontSize: "40px" }}
              />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Pause">
            <IconButton>
              <PauseOutlinedIcon
                onClick={handleStop}
                sx={{ color: "#007bff", fontSize: "40px" }}
              />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default Stopwatch;
