// Description:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
	const non_zeroz = arr.filter((e) => e !== 0);
	const zeros = arr.filter((e) => e === 0);

	return [...non_zeroz, ...zeros];
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
console.log(moveZeros([9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0]));

console.log(
	moveZeros([
		"3",
		null,
		"4",
		"9",
		6,
		null,
		{},
		true,
		3,
		{},
		"8",
		null,
		8,
		"4",
		null,
		"5",
		"6",
		{},
		"3",
		"7",
		"4",
		[],
		false,
		true,
		null,
		false,
		5,
		"0",
		"0",
		"0",
	]),
);
