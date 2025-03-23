// Description:
// Write a function called findUnique which returns the only unique number from an array.

// All numbers in the unsorted array are present twice, except the one you have to find. The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. The array contains at least one number and may contain millions of numbers. So make sure your solution is optimized for speed.

// Example
// Input:

// [ 1, 8, 4, 4, 6, 1, 8 ]
// Expected output:

// 6

// function findUnique(numbers) {
// 	const pair = {};

// 	for (let num of numbers) {
// 		if (!pair[num]) pair[num] = 1;
// 		else pair[num]++;
// 	}

// 	for (let [key, val] of Object.entries(pair)) {
// 		if (val === 1) return parseInt(key);
// 	}

// 	return [];
// }

// USER XOR FOR FINDING SIGLE UNIQUE NUMBER
function findUnique(numbers) {
	let res = 0;

	for (let num of numbers) {
		res ^= num;
	}

	return res;
}

console.log(findUnique([1, 8, 4, 4, 6, 1, 8]));
console.log(findUnique([1234567]));
console.log(findUnique([1, 4, 4, 5, 5, 3, 3, 2, 2]));
console.log(findUnique([2, 2, 5, 5, 4, 3, 3, 1, 1]));
console.log(findUnique([3, 5, 5, 4, 4, 3, 2, 2, 9]));
