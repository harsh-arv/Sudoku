import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ReplayCircleFilledRoundedIcon from "@mui/icons-material/ReplayCircleFilledRounded";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

import "./NavBar.scss";
function NavBar({ play, setPlay }) {
  
  return (
    <div className="nav-container">
      <div class="sudoku-title">
        <span class="accent">S</span>
        <span class="text">UD</span>
        <span class="accent">Ö</span>
        <span class="text">KU</span>
      </div>
      <div className="reload-hint-container">
        <Tooltip title="Reload">
          <IconButton>
            <ReplayCircleFilledRoundedIcon
              sx={{ color: "#ffffff", fontSize: "50px" }}
            />{" "}
          </IconButton>
        </Tooltip>
        <Tooltip title="More Info">
          <IconButton>
            <HelpOutlineIcon sx={{ color: "#ffffff", fontSize: "50px" }} />{" "}
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}

export default NavBar;
