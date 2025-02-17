// Description:
// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);

// should return

// H W
// e o
// l r
// l l
// o d

function transposeTwoStrings(array) {
  const longest = array.reduce((a, b) => Math.max(a.length, b.length));
  let index = 0;
  let res = "";
  for (let i = 0; i < longest; i++) {
    let temp = [];
    for (let j = 0; j < longest; j++) {
      temp.push(array[j][i]);
    }
    res += temp.join(" ") + "\n";
  }
}

transposeTwoStrings(["Hello", "World"]);
