import React, { useEffect, useState } from "react";
import "./TableComponent.scss";
import { randamValueAssigner } from "./constant";

const TableComponent = () => {
  // Create a 9x9 matrix
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

  const [tableData, setTableData] = useState(data);

  const handleData = (value, rowIndex, colIndex) => {
    if (value > 0 && value < 9) {
      console.log(value, rowIndex, colIndex);
      setData((prev) => {
        const newData = [...prev];
        newData[rowIndex] = [...newData[rowIndex]];
        newData[rowIndex][colIndex] = value;
        return newData;
      });
    }
  };

  useEffect(() => {
    // console.log(data);
  }, [data]);

  useEffect(() => {
    setTableData(randamValueAssigner(data, 4));
    setData(tableData);

    // console.log(x, "hjj");
  }, []);

  return (
    <table border="1">
      <tbody>
        {tableData.map((dataRow, rowIndex) => (
          <tr key={rowIndex}>
            {dataRow.map((dataCol, colIndex) => (
              <td key={colIndex}>
                {/* Row {dataRow} Col {dataCol} */}
                {dataCol == 0 ? (
                  <input
                    type="number"
                    // value={dataCol}
                    onChange={(e) =>
                      handleData(e.target.value, rowIndex, colIndex)
                    }
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
