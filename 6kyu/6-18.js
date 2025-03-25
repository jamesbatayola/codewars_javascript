// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

// 2332
// 110011
// 54322345

// You'll be given 2 numbers as arguments: (num,s). Write a function which returns an array of s number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count.

// Return "Not valid" instead if any one of the inputs is not an integer or is less than 0.

// For this kata, single digit numbers will NOT be considered numerical palindromes.

// palindrome(6,4) => [11,22,33,44]
// palindrome(59,3) => [66,77,88]
// palindrome(101,2) => [101,111]
// palindrome("15651",5) => "Not valid"
// palindrome(1221,"8") => "Not valid"

function isPalindrome(numString) {
	if (numString.length <= 1) return false;

	const mid = Math.floor(numString.length / 2);
	for (let i = 0; i < mid; i++) {
		if (numString[i] !== numString[numString.length - (i + 1)]) {
			return false;
		}
	}
	return true;
}

function palindrome(num, s) {
	if (!s) return [];

	if (num < 0 || typeof num !== "number" || typeof s !== "number") return "Not valid";

	const res = [];

	while (res.length < s) {
		if (isPalindrome(`${num}`)) {
			res.push(num);
			num++;
		}

		num++;
	}

	return res;
}

console.log(palindrome(6, 4));
console.log(palindrome(75, 1));
console.log(palindrome(493, 0));
console.log(palindrome(0, 3));
console.log(palindrome(1219, 3));

console.log(palindrome(1219, 3));
console.log(palindrome(101, 2));
console.log(palindrome(3872, 6));

console.log(palindrome("ACCDDCCA", 3));
console.log(palindrome(773, "1551"));
console.log(palindrome(-4505, 15));
