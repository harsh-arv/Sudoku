import React, { useEffect, useState } from "react";
import "./TableComponent.scss";
import {
  colCheck,
  getSubgridIndices,
  getSudokuSubgrid,
  randamValueAssigner,
  rowCheck,
} from "./constant";

const TableComponent = ({ play, setPlay }) => {
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
      // console.log(value, rowIndex, colIndex);
      // getSudokuSubgrid(data, rowIndex, colIndex, value);
      console.log("here");

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

  useEffect(() => {
    const updatedTableData = randamValueAssigner(data, 4);
    setTableData(updatedTableData);
    setData(updatedTableData);
    console.log(play);
  }, []);

  useEffect(() => {
    console.log(play);
  }, [play]);

  return (
    <table border="1" className={`table-container `}>
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
                      console.log(e.target.value);
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
  );
};

export default TableComponent;
