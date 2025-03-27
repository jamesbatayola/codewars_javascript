// Description:

// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.
// Examples

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr) {
	const map = new Map();

	for (let val of arr) {
		map.set(val, map.get(val) + 1 || 1);
	}

	let highest = 0;

	for (let each of map) {
		if (highest < each[1]) {
			highest = each[1];
		}
	}

	const res = [];

	for (let each of map) {
		if (each[1] === highest) {
			res.push(each[0]);
		}
	}

	return res.length > 1 ? res.reduce((a, b) => Math.max(a, b)) : res[0];
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]));
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]));
