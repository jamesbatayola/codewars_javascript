// A family of kookaburras are in my backyard.

// I can't see them all, but I can hear them!
// How many kookaburras are there?
// Hint

// The trick to counting kookaburras is to listen carefully

//     The males sound like HaHaHa...

//     The females sound like hahaha...

//     And they always alternate male/female

// Examples

//     ha = female => 1
//     Ha = male => 1
//     Haha = male + female => 2
//     haHa = female + male => 2
//     hahahahaha = female => 1
//     hahahahahaHaHaHa = female + male => 2
//     HaHaHahahaHaHa = male + female + male => 3

var kookaCounter = function(laughing) {
    if(laughing === '') return 0;

    laughing = laughing.replace(/a/g, '');
    let count = 1, init = laughing[0];
    [...laughing].forEach((e, i) => {
        if(init !== laughing[i]) {
            count++;
            init = laughing[i];
        }
    })

    return count;
}

console.log(kookaCounter('hahahahah'));
console.log(kookaCounter('Haha'));
console.log(kookaCounter('HaHaHahahaHaHa'));