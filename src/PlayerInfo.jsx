import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";
import { generateGibberishName } from "./constant";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import "./PlayerInfo.scss";
import { usePlayerContext } from "./PlayerContext";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function PlayerInfo() {
  const [open, setOpen] = React.useState(true);
  const { playerInfo, setPlayerInfo } = usePlayerContext();
  const [playerInputs, setPlayerInputs] = React.useState({ ...playerInfo });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setPlayerInfo((prevInfo) => ({
      ...prevInfo,
      ...playerInputs,
    }));
    setOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPlayerInputs((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(playerInputs);
  }, [playerInputs]);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="player-container">
          <div className="player-bar">
            <label>Name:</label>
            <TextField
              // required
              id="outlined-required"
              label="Name"
              name="name"
              value={playerInputs.name}
              onChange={handleChange}
            />
          </div>
          <div className="player-bar">
            <label>Difficulty:</label>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Level</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={playerInputs.difficulty}
                label="Level"
                name="difficulty"
                onChange={handleChange}
              >
                <MenuItem value={"easy"}>Easy</MenuItem>
                <MenuItem value={"medium"}>Medium</MenuItem>
                <MenuItem value={"hard"}>Hard</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="player-submit-button">
            <Button
              onClick={handleClose}
              variant="contained"
              sx={{ backgroundColor: "#23ac68" }}
            >
              Submit
              <KeyboardReturnIcon />
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default PlayerInfo;
