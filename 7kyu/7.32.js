// Description:

// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

function switcher(x) {
   x = x.map((e) => Number(e));

   const res = x.map((e) => {
      if (e === 27) return "!";
      if (e === 28) return "?";
      if (e === 29) return ` `;
      return String.fromCharCode(123 - e);
   });

   return res.join("");
}

console.log(switcher(["24", "12", "23", "22", "4", "26", "9", "8", "27"]));
