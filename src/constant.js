export const randamValueAssigner = (array, count) => {
  let newData = array.map((row) => [...row]); // Create a deep copy of the array to maintain immutability

  for (let i = 0; i < newData.length; i++) {
    for (let j = 0; j < count; j++) {
      let randomCol;
      let randomValue;
      // Ensure randomCol is empty before assigning a value
      do {
        randomCol = Math.floor(Math.random() * newData[i].length);
        randomValue = Math.floor(Math.random() * 9) + 1;
    } while (newData[i][randomCol] !== 0 || newData[i].includes(randomValue));
      newData[i][randomCol] = randomValue;
 
    }
  }
  console.log(newData);

  return newData;
};

export const rowCheck = (array) => {};
