// Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

// Ex:

// 274 -> '2-7-4'
// 6815 -> '68-1-5'

// function dashatize(num) {
// 	const numString = num.toString();
// 	let res = "";

// 	for (let i = 0; i < numString.length; i++) {
// 		if (i > 0 && parseInt(numString[i]) % 2 !== 0) {
// 			res += `-${numString[i]}-`;
// 		} else {
// 			res += numString[i];
// 		}
// 	}

// 	return res.at(-1) === "-" ? res.substring(0, res.length - 1) : res;
// }

function dashatize(num) {
	num = Math.abs(num).toString();

	let res = [];

	for (let i = 0; i < num.length; i++) {
		if (i <= 0 || Number(num[i]) % 2 === 0) {
			if (Number(num[i]) % 2 === 0) {
				res.push(num[i]);
			} else {
				res.push(num[i], "-");
			}
			continue;
		}

		if (res.at(-1) !== "-") {
			res.push("-", num[i], "-");
		} else {
			res.push(num[i], "-");
		}
	}

	if (res.at(-1) === "-") res.pop();

	return res.join("");
}

console.log(dashatize(274));
console.log(dashatize(5311));
console.log(dashatize(86320));
console.log(dashatize(974302));

console.log(dashatize(0));
console.log(dashatize(-1));
console.log(dashatize(-28369));

console.log(dashatize(-76));
console.log(dashatize(-524496));

// --------- CLEVER --------- //

function dashatize(num) {
	return String(num)
		.replace(/([13579])/g, "-$1-")
		.replace(/--+/g, "-")
		.replace(/(^-|-$)/g, "");
}
