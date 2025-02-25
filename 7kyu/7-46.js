// Complete the method which accepts an array of integers, and returns one of the following:

//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
//     "yes, descending" - if the numbers in the array are sorted in a descending order
//     "no" - otherwise

// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
   let isAscend = true;
   let isDescend = true;

   for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
         isAscend = false;
      }
   }

   for (let i = 1; i < array.length; i++) {
      if (array[i - 1] < array[i]) {
         isDescend = false;
      }
   }

   return isAscend ? "yes, ascending" : isDescend ? "yes, descending" : "no";
}

// OTHER ANSWER

return arr.every((x, i) => i == 0 || arr[i] >= arr[i - 1])
   ? "yes, ascending"
   : arr.every((x, i) => i == 0 || arr[i] <= arr[i - 1])
   ? "yes, descending"
   : "no";

console.log(isSortedAndHow([1, 2]));
console.log(isSortedAndHow([15, 7, 3, -8]));
console.log(isSortedAndHow([4, 2, 30]));
