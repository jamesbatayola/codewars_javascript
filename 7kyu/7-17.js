// Description:
// Task:
// You have to write a function pattern which creates the following pattern up to n/2 number of lines.

// If n <= 1 then it should return "" (i.e. empty string).
// If any odd number is passed as argument then the pattern should last up to the largest even number which is smaller than the passed odd number.
// Examples:
// n = 8:

// 22
// 4444
// 666666
// 88888888
// n = 5:

// 22
// 4444

function pattern(n) {
    let output = "";
    n = Math.floor(n / 2);
    for (let i = 2; i <= n * 2; i += 2) {
        output += `${i}`.repeat(i) + (i + 2 <= n * 2 ? "\n" : "");
    }
    return output;
}

console.log(pattern(8));
// console.log(pattern(7));
// console.log(pattern(1));
