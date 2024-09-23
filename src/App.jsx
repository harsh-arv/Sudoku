import { useState } from "react";
import TableComponent from "./TableComponent";
import NavBar from "./NavBar";
import SidePannel from "./SidePannel";
import { usePlayerContext } from "./PlayerContext";

import "./App.css";
import PlayerInfo from "./PlayerInfo";

function App() {
  const { playerInfo, setPlayerInfo } = usePlayerContext();

  const [play, setPlay] = useState(playerInfo.isPlay);

  return (
    <>
      <NavBar play={play} setPlay={setPlay} />
      <PlayerInfo />
      <div className="main-container">
        <div className="left-panel">
          <TableComponent play={play} setPlay={setPlay} />{" "}
        </div>
        <div className="right-panel">
          <SidePannel play={play} setPlay={setPlay} />{" "}
        </div>
      </div>
    </>
  );
}

export default App;
