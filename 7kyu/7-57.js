// Description:
// Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array / tuple of two integers (depending on your language), whereby the first one is the total weight of team 1, and the second one is the total weight of team 2. Note that the array will never be empty.

function rowWeights(array) {
  const res = [0, 0];
  let pos = 0;

  for (let data of array) {
    res[pos++] += data;

    if (pos > 1) pos -= 2;
  }

  return res;
}

console.log(rowWeights([80, 0]));
console.log(rowWeights([100, 50]));
console.log(rowWeights([50, 60, 70, 80]));
console.log(rowWeights([13, 27, 49]));
console.log(rowWeights([70, 58, 75, 34, 91]));
console.log(rowWeights([29, 83, 67, 53, 19, 28, 96]));
console.log(rowWeights([100, 51, 50, 100]));
console.log(rowWeights([39, 84, 74, 18, 59, 72, 35, 61]));
