// Description:

// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

// 2332
// 110011
// 54322345

// For this kata, single digit numbers will not be considered numerical palindromes.

// For a given number num, write a function to test if the number contains a numerical palindrome or not and return a boolean (true if it does and false if does not). Return "Not valid" if the input is not an integer or is less than 0.

// Note: Palindromes should be found without permutating num.

// palindrome(5) => false
// palindrome(1221) => true
// palindrome(141221001) => true
// palindrome(1215) => true
// palindrome(1294) => false
// palindrome("109982") => "Not valid"

function palindrome_helper(numString) {
	if (numString.length <= 1 || numString.length <= 2) {
		return false;
	}

	const mid = Math.floor(numString.length / 2);

	for (let i = 0; i < mid; i++) {
		if (numString[i] !== numString[numString.length - (i + 1)]) {
			return false;
		}
	}

	return true;
}

const palindrome = (num) => {
	if (!Number.isInteger(num) || num < 10) return "Not valid";

	const numString = `${num}`;

	for (let i = 0; i < numString.length; i++) {
		let sub = [];
		sub.push(numString[i]);
		for (let j = i + 1; j < numString.length; j++) {
			sub.push(numString[j]);
			if (palindrome_helper(sub)) {
				return true;
			}
		}
	}

	return false;
};

console.log(palindrome(22));
console.log(palindrome(123322367));
console.log(palindrome(1551));
console.log(palindrome(1215));
console.log(palindrome(13598));
console.log(palindrome("ACCDDCCA"));
console.log(palindrome("1551"));
console.log(palindrome(-4505));

console.log("");
console.log(" ----- CLAUDE_TEST_CASE ----- ");
console.log("");

console.log(palindrome(5));
console.log(palindrome(1221));
console.log(palindrome(141221001));
console.log(palindrome(1215));
console.log(palindrome(1294));
console.log(palindrome("109982"));
console.log(palindrome(123454321));
console.log(palindrome(22));
console.log(palindrome(0));
console.log(palindrome(-11));
