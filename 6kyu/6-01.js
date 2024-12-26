// The main part of this game is merging identical tiles in a row.

//     Implement a function that models the process of merging all of the tile values in a single row.
//     This function takes the array line as a parameter and returns a new array with the tile values from line slid towards the front of the array (index 0) and merged.
//     A given tile can only merge once.
//     Empty grid squares are represented as zeros.
//     Your function should work on arrays containing arbitrary number of elements.

// Examples

// merge([2,0,2,2])  -->  [4,2,0,0]

// Another example with repeated merges:

// merge([4,4,8,16])  -->  [8,8,16,0]
// merge([8,8,16,0])  -->  [16,16,0,0]
// merge([16,16,0,0]) -->  [32,0,0,0]

// function merge(line) {
//     const res = [];
//     line.sort();
//     for(let i = 1; i < line.length; i++) {
//         if(line[i] > 0 && line[i-1] > 0 && line[i] === line[i-1]) {
//             res.push(line[i] * 2);
//         } else {
//             res.push(line[i]);
//         }
//     }
//     for(let i = 0; i <= line.length - res.length; i++) {
//         res.push(0);
//     }
//     return res;
// };

// -UNFINISHED-

function merge(line) {
    const res = [];
    let copy = [...line];
    for(let i = 0; i < copy.length;) {
        for(let j = 1; j < copy.length; j++) {
            if(copy[i] === copy[j]) {
                res.push(copy[i] * 2);
                copy = copy.filter(e => e !== copy[i]);
                i = 0;
            } else {
                res.push(copy[j])
                i++;
            }
        }
    }
    return res;
};

const test1 = merge([2,0,2,2]);

test1.forEach(e => console.log(e));