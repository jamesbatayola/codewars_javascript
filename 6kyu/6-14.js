// The aim of this Kata is to write a function which will reverse the case of all consecutive duplicate letters in a string. That is, any letters that occur one after the other and are identical.

// If the duplicate letters are lowercase then they must be set to uppercase, and if they are uppercase then they need to be changed to lowercase.

// Examples:

// "puzzles" --> "puZZles"
// "massive" --> "maSSive"
// "LITTLE"  --> "LIttLE"
// "shhh"    --> "sHHH"

function reverseCase(string) {
	if (!string.length) return "";

	let res = "";
	const temp = [];

	for (let i = 0; i <= string.length; i++) {
		temp.push(string[i]);

		if (temp.length <= 1) continue;

		if (temp.at(-2) === temp.at(-1)) continue;

		const z = temp.splice(0, temp.length - 1).join("");

		if (z.length <= 1) {
			res += z;
		} else {
			res += z === z.toLowerCase() ? z.toUpperCase() : z.toLowerCase();
		}
	}

	return res;
}

// console.log(reverseCase("hello world"));
// console.log(reverseCase("HELLO WORLD"));
// console.log(reverseCase("HeLLo World"));
// console.log(reverseCase("WWW"));

console.log(reverseCase("doja catt mmatt alibii"));
