// Description:

// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// Examples:

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]

// Points:

//     The arrays may be of different lengths, with at least one character/digit.
//     One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

function mergeArrays(a, b) {
   const len = Math.max(a.length, b.length);
   let res = [];
   for (let i = 0; i < len; i++) {
      res.push(a[i]);
      res.push(b[i]);
   }
   return res.filter((a) => a);
}

console.log(mergeArrays(["a", "b"], [1, 2, 3, 4, 5]));
