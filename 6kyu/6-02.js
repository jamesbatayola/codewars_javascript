// Task:

// You have to write a function pattern which creates the following Pattern(See Examples) upto n(parameter) number of rows.
// Rules/Note:

//     If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
//     All the lines in the pattern have same length i.e equal to the number of characters in the last line.
//     Range of n is (-∞,100]

// Examples:

// pattern(5):

//     1
//    121
//   12321
//  1234321
// 123454321

// pattern(10):

//          1
//         121
//        12321
//       1234321
//      123454321
//     12345654321
//    1234567654321
//   123456787654321
//  12345678987654321
// 1234567890987654321

// pattern(15):

//               1
//              121
//             12321
//            1234321
//           123454321
//          12345654321
//         1234567654321
//        123456787654321
//       12345678987654321
//      1234567890987654321
//     123456789010987654321
//    12345678901210987654321
//   1234567890123210987654321
//  123456789012343210987654321
// 12345678901234543210987654321

// pattern(20):

//                    1
//                   121
//                  12321
//                 1234321
//                123454321
//               12345654321
//              1234567654321
//             123456787654321
//            12345678987654321
//           1234567890987654321
//          123456789010987654321
//         12345678901210987654321
//        1234567890123210987654321
//       123456789012343210987654321
//      12345678901234543210987654321
//     1234567890123456543210987654321
//    123456789012345676543210987654321
//   12345678901234567876543210987654321
//  1234567890123456789876543210987654321
// 123456789012345678909876543210987654321

function asc(len) {
   let res = "";
   let num = 1,
      index = 1;
   while (index <= len) {
      res += num;
      num = num === 9 ? 0 : num + 1;
      index++;
   }
   return res;
}

function desc(len) {
   let res = "";
   let num = len - 1,
      index = 1;
   while (index < len) {
      res += num <= 9 ? num : num.toString()[1];
      num = num === 0 ? 9 : num - 1;
      index++;
   }
   return res;
}

function pattern(n) {
   if (n <= 0) return "";

   let res = [],
      curLen = 1,
      indent = n - 1;

   for (let i = 0; i < n; i++) {
      let temp = "";
      temp += asc(Math.floor(curLen / 2), temp);
      const mid =
         Math.ceil(curLen / 2) <= 9
            ? Math.ceil(curLen / 2)
            : Math.ceil(curLen / 2).toString()[1];
      temp += curLen <= 1 ? 1 : mid;
      temp += desc(Math.round(curLen / 2), temp);
      res.push(" ".repeat(indent) + temp + " ".repeat(indent));
      curLen += 2;
      indent--;
   }

   return res.join("\n");
}

console.log(pattern(45));
