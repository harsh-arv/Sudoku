import { useState } from "react";
import TableComponent from "./TableComponent";
import NavBar from "./NavBar";
import SidePannel from "./SidePannel";
import "./App.css";

function App() {
  const [play, setPlay] = useState(true);

  return (
    <>
      <NavBar play={play} setPlay={setPlay} />
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
