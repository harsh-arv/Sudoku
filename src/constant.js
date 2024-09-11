export const randamValueAssigner = (array, count) => {
  let newData = array.map((row) => [...row]);
  for (let i = 0; i < newData.length; i++) {
    for (let j = 0; j < count; j++) {
      let randomCol;
      let randomValue;
      do {
        randomCol = Math.floor(Math.random() * newData[i].length);
        randomValue = Math.floor(Math.random() * 9) + 1;
      } while (
        newData[i][randomCol] !== 0 ||
        newData[i].includes(randomValue) ||
        colCheck(newData, randomCol, randomValue) ||
        getSudokuSubgrid(newData, i, randomCol, randomValue)
      );
      newData[i][randomCol] = randomValue;
    }
  }
  return newData;
};

export const rowCheck = (array, value, rowIndex, colIndex) => {
  array[rowIndex].includes(Number(value))
    ? console.log("Present at Row:", array[rowIndex].indexOf(Number(value)))
    : "";
  return array[rowIndex].includes(Number(value));
};

export const colCheck = (array, colIndex, value) => {
  for (let rowIndex = 0; rowIndex < array.length; rowIndex++) {
    if (array[rowIndex][colIndex] === Number(value)) {
      console.log("Present in Row:", rowIndex, "at colIndex:", colIndex);
      return true;
    }
  }
  return false;
};

export const getSudokuSubgrid = (data, rowIndex, colIndex, value) => {
  // Determine the starting row and column of the 3x3 subgrid
  const startRow = Math.floor(rowIndex / 3) * 3;
  const startCol = Math.floor(colIndex / 3) * 3;

  // Collect the values in the 3x3 subgrid
  const subgrid = [];

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      subgrid.push(data[i][j]);
    }
  }
  subgrid.includes(Number(value)) ? console.log(subgrid) : "No Element in grid";

  return subgrid.includes(Number(value)); // Return the 3x3 subgrid as a flat array
};



export const getSubgridIndices = (rowIndex, colIndex) => {
  const startRow = Math.floor(rowIndex / 3) * 3;
  const startCol = Math.floor(colIndex / 3) * 3;
  const subgridIndices = [];

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      subgridIndices.push({ row: i, col: j });
    }
  }

  return subgridIndices;
};