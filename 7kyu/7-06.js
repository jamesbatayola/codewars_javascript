// Given a string of space separated words, return the longest word.
// If there are multiple longest words, return the rightmost longest word.
// Examples

// "red white blue"  =>  "white"
// "red blue gold"   =>  "gold"

function longestWord(stringOfWords) {
   const words = stringOfWords.split(" ");
   const highest = words.map((e) => e.length).reduce((x, y) => Math.max(x, y));
   return words.findLast((e) => e.length === highest);
}

console.log(longestWord("red white blue"));
console.log(longestWord("a b c d e fgh"));
console.log(longestWord("one two three"));
console.log(longestWord("red blue grey"));

// OTHER ANSER ----

function _longestWord(str) {
   return str
      .split(" ")
      .sort((b, a) => b.length - a.length)
      .pop();
}
