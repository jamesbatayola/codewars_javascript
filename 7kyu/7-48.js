// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

//     The starting array sequence is [1,2,3,4,5,6,7,8,9]
//     The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
//     Your function should return the int 5.

// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

function findDeletedNumber(arr, mixArr) {
   let res;

   arr.forEach((e) => {
      if (!mixArr.includes(e)) {
         return (res = e);
      }
   });

   return res || 0;
}

// OTHER ANSWER

// function findDeletedNumber(arr, mixArr) {
//    let arrSum = arr.reduce((a, b) => a + b, 0);
//    let mixArrSum = mixArr.reduce((a, b) => a + b, 0);
//    return arrSum - mixArrSum;
// }

console.log(
   findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [3, 2, 4, 6, 7, 8, 1, 9])
);

// console.log([1, 2, 3].includes(0));
