// Emotional Sort ( ︶︿︶)
// You'll have to create a function that will return an array of emotions sorted. It has two parameters, the first parameter called will expect an array of emotions where an emotion will be one of the following:

// :D -> Super Happy
// :) -> Happy
// :| -> Normal
// :( -> Sad
// T_T -> Super Sad
// Example of the array:[ "T_T", ":D", ":|", ":)", ":(" ]

// And the second parameter will expect a boolean. If this parameter is true then the order of the emotions will be descending (from Super Happy to Super Sad) if it's false then it will be ascending (from Super Sad to Super Happy)

// Example if order is true with the above array: [ ":D", ":)", ":|", ":(", "T_T" ]

// Super Happy -> Happy -> Normal -> Sad -> Super Sad
// If order is false: [ "T_T", ":(", ":|", ":)", ":D" ]

// Super Sad -> Sad -> Normal -> Happy -> Super Happy
// Example:

// array: [":D", ":|", ":)", ":(", ":D"]
// order: true
// should return [ ":D", ":D", ":)", ":|", ":(" ]

// array: [":D", ":|", ":)", ":(", ":D"]
// order: false
// should return [ ":(", ":|", ":)", ":D", ":D" ]
// More in test cases!

// Notes:

// The array could be empty, in that case return the same empty array ¯\_( ツ )_/¯
// All emotions will be valid
// Enjoy! (づ｡◕‿‿◕｡)づ

function sortEmotions(arr, order) {
	if (!arr.length) return arr;

	const emotions = {
		":D": 0,
		":)": 1,
		":|": 2,
		":(": 3,
		T_T: 4,
	};

	const _emotions = {
		0: ":D",
		1: ":)",
		2: ":|",
		3: ":(",
		4: "T_T",
	};

	const nums = arr.map((e) => emotions[e]).sort((a, b) => (order ? a - b : b - a));
	return nums.map((e) => _emotions[e]);
}

// OTHER VARIATION

function sortEmotions(arr, order) {
	const m = {
		":D": 1,
		":)": 2,
		":|": 3,
		":(": 4,
		T_T: 5,
	};
	return arr.sort((a, b) => (order ? m[a] - m[b] : m[b] - m[a]));
}

console.log(sortEmotions([":D", "T_T", ":D", ":("], false));
