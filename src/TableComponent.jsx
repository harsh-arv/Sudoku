import React, { useEffect, useState } from "react";
import "./TableComponent.scss";
import {
  colCheck,
  getSubgridIndices,
  getSudokuSubgrid,
  randamValueAssigner,
  rowCheck,
} from "./constant";
import { usePlayerContext } from "./PlayerContext";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
const TableComponent = ({ play, setPlay }) => {
  const { playerInfo, setPlayerInfo } = usePlayerContext();

  const [data, setData] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedCol, setSelectedCol] = useState(null);
  const [highlightedSubgrid, setHighlightedSubgrid] = useState([]);

  // Function to handle when a cell is clicked
  const handleCellClick = (rowIndex, colIndex) => {
    setSelectedRow(rowIndex);
    setSelectedCol(colIndex);
    setHighlightedSubgrid(getSubgridIndices(rowIndex, colIndex));
  };

  const [tableData, setTableData] = useState(data);

  const handleData = (value, rowIndex, colIndex) => {
    if (value > 0 && value < 10) {
      if (
        rowCheck(data, value, rowIndex, colIndex).isPresent &&
        colCheck(data, colIndex, value).isPresent &&
        getSudokuSubgrid(data, rowIndex, colIndex, value)
      )
        setData((prev) => {
          const newData = [...prev];
          newData[rowIndex] = [...newData[rowIndex]];
          newData[rowIndex][colIndex] = Number(value);
          return newData;
        });
    }
  };

  const handlePlay = () => {
    setPlayerInfo((prev) => ({
      ...prev,
      isPlay: !play,
    }));
  };

  useEffect(() => {
    const updatedTableData = randamValueAssigner(data, 4);
    setTableData(updatedTableData);
    setData(updatedTableData);
  }, []);

  // useEffect(() => {
  //   console.log(playerInfo);
  // }, [playerInfo]);

  return (
    <div className="parent-table-container">
      <div className="upper-table-container">
        {/* <div > */}
        <label>Difficulty:</label>
        <h6 className={playerInfo.difficulty}>{playerInfo.difficulty}</h6>
        {/* </div> */}
      </div>
      <div className={`table-container `}>
        <table border="1">
          <tbody>
            {tableData.map((dataRow, rowIndex) => (
              <tr
                key={rowIndex}
                className={selectedRow === rowIndex ? "active-cells" : ""}
              >
                {dataRow.map((dataCol, colIndex) => (
                  <td
                    key={colIndex}
                    className={`
                    ${
                      selectedCol === colIndex ||
                      selectedRow === rowIndex ||
                      highlightedSubgrid.some(
                        (cell) => cell.row === rowIndex && cell.col === colIndex
                      )
                        ? "active-cells"
                        : ""
                    }
                    ${play ? "disable" : ""}
                  `}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                  >
                    {dataCol == 0 ? (
                      <input
                        type="tel"
                        inputMode="numeric"
                        pattern="[1-9]"
                        onKeyDown={(e) => {
                          if (!/^[1-9]$/.test(e.key) && e.key !== "Backspace") {
                            e.preventDefault();
                          }
                        }}
                        onChange={(e) => {
                          e.target.value = e.target.value.slice(-1);
                          handleData(e.target.value, rowIndex, colIndex);
                        }}
                      />
                    ) : (
                      dataCol
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {playerInfo.isPlay && (
          <div className="play-pause-table" onClick={handlePlay}>
            <PlayCircleRoundedIcon style={{ fontSize: 80 }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TableComponent;
