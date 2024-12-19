// Description:

// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).
// Examples

// "WAtErSlIde"                    ==>  1
// "GolDeNSanDyWateRyBeaChSuNN"    ==>  3
// "gOfIshsunesunFiSh"             ==>  4
// "cItYTowNcARShoW"               ==>  0

function sumOfABeach(beach) {
    const lower = beach.toLowerCase();
    let count = 0;
    let word = '';
    for(let i = 0; i < lower.length; i++) {
        word += lower[i];
        ['sand', 'water', 'fish', 'sun'].some(e => {
            if(word.includes(e)) {
                count++;
                word = '';
            }
        })
    }
    return count;
}

//  console.log(sumOfABeach('WAtErSlIde'));
//  console.log(sumOfABeach('GolDeNSanDyWateRyBeaChSuNN'));
//  console.log(sumOfABeach('gOfIshsunesunFiSh'));
//  console.log(sumOfABeach('cItYTowNcARShoW'));

 console.log(sumOfABeach('SanD'));
 console.log(sumOfABeach('sunshine'));
 console.log(sumOfABeach('sunsunsunsun'));
 console.log(sumOfABeach('123FISH321'));