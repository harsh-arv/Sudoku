import { useState } from "react";
import NumberPad from "./NumPad";
import "./SidePannel.scss";
import Stopwatch from "./Stopwatch";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";
import UndoSharpIcon from "@mui/icons-material/UndoSharp";
import TextSnippetSharpIcon from "@mui/icons-material/TextSnippetSharp";
import TungstenSharpIcon from "@mui/icons-material/TungstenSharp";
import { usePlayerContext } from "./PlayerContext";
function SidePannel({ play, setPlay }) {
  const { playerInfo, setPlayerInfo } = usePlayerContext();
 
  return (
    <div className="side-panel-container">
      <div className="name-container">
        <h1>{playerInfo.name}</h1>
      </div>
      <div className="">
        <Stopwatch play={play} setPlay={setPlay} />
      </div>
      <div className="shortcuts">
        <div className="individual-icon-highlighter">
          <div className="icon-wrapper">
            <ClearSharpIcon />
          </div>
          <p className="text-description">Erase</p>
        </div>

        <div className="individual-icon-highlighter">
          <div className="icon-wrapper">
            <UndoSharpIcon />
          </div>
          <p className="text-description">Undo</p>
        </div>
        <div className="individual-icon-highlighter">
          <div className="icon-wrapper">
            <TextSnippetSharpIcon />
          </div>
          <p className="text-description">Notes</p>
        </div>
        <div className="individual-icon-highlighter">
          <div className="icon-wrapper">
            <TungstenSharpIcon sx={{ rotate: "180deg" }} />
          </div>
          <p className="text-description">Hints</p>
        </div>
      </div>
      <NumberPad />
    </div>
  );
}

export default SidePannel;
