// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str) {
	if (str.trim().length <= 0) return "";

	const words = str.split(" ");
	const res = [];

	for (let i = 0; i < words.length; i++) {
		if (i % 2 === 0) res.push(words[i]);
		else {
			const word = words[i].split("").reverse().join("");
			res.push(word);
		}
	}

	return res.join(" ");
}

console.log(reverse("Reverse this string, please!"));
console.log(reverse(""));
