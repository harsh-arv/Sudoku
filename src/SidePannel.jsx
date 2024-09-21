import NumberPad from "./NumPad";
import "./SidePannel.scss";
import Stopwatch from "./Stopwatch";
function SidePannel({ play, setPlay }) {
  return (
    <div className="side-panel-container">
      <div className="name-container">
        <h1>Your Name</h1>
      </div>
      <div className="">
        <Stopwatch play={play} setPlay={setPlay} />
      </div>
      <NumberPad />
    </div>
  );
}

export default SidePannel;
