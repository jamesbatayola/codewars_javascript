// In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

// Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.

// For example: 
// solve("abc") = True, because it contains a,b,c
// solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
// solve("dabc") = True, because it contains a, b, c, d
// solve("abbc") = False, because b does not occur once.
// solve("v") = True

function solve(s) {
    const ascii = [...s].map(e => e.charCodeAt(0)).sort((a,b) => a-b);
    for(let i = 1; i < ascii.length; i++) {
        if(ascii[i] !== ascii[i-1] + 1) 
            return false
    }
    return true;
}

console.log(solve("abc"));
console.log(solve("abd"));
console.log(solve("dabc"));
console.log(solve("abbc"));
console.log(solve("v"));