// Introduction

// The GADERYPOLUKI is a simple substitution cypher used in scouting to encrypt messages. The encryption is based on short, easy to remember key. The key is written as paired letters, which are in the cipher simple replacement.

// The most frequently used key is "GA-DE-RY-PO-LU-KI".

//  G => A
//  g => a
//  a => g
//  A => G
//  D => E
//   etc.

// The letters, which are not on the list of substitutes, stays in the encrypted text without changes.
// Task

// Your task is to help scouts to encrypt and decrypt thier messages. Write the Encode and Decode functions.
// Input/Output

// The input string consists of lowercase and uperrcase characters and white . The substitution has to be case-sensitive.
// Example

//  encode("ABCD")          // => GBCE
//  encode("Ala has a cat") // => Gug hgs g cgt
//  encode("gaderypoluki"); // => agedyropulik
//  decode("Gug hgs g cgt") // => Ala has a cat
//  decode("agedyropulik")  // => gaderypoluki
//  decode("GBCE")          // => ABCD

const pairs = {
   G: "A",
   A: "G",
   D: "E",
   E: "D",
   R: "Y",
   Y: "R",
   P: "O",
   O: "P",
   L: "U",
   U: "L",
   K: "I",
   I: "K",
};

function encode(str) {
   let res = "";
   for (let i = 0; i < str.length; i++) {
      const temp = pairs[str[i].toUpperCase()];

      if (temp === undefined) {
         res += str[i];
         continue;
      }

      res += str[i] === str[i].toLowerCase() ? temp.toLowerCase() : temp;
   }
   return res;
}

// console.log(encode("abcd"));
console.log(encode("Ala has a cat"));
console.log(encode("gaderypoluki"));
