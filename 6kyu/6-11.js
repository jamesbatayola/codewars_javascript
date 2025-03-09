// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

//     Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

// ------- CLAUDE'S SOLUTION ------- //

function isValidWalk(walk) {
	if (walk.length !== 10) {
		return false;
	}

	let x = 0;
	let y = 0;

	for (const direction of walk) {
		switch (direction) {
			case "n":
				y++;
				break;
			case "s":
				y--;
				break;
			case "e":
				x++;
				break;
			case "w":
				x--;
				break;
			default:
				return false;
		}
	}

	return x === 0 && y === 0;
}

// function isValidWalk(walk) {
// 	if (walk.length > 10 || walk.length < 10) {
// 		return false;
// 	}

// 	const steps = [];

// 	for (let i = 0; i < walk.length; i++) {
// 		if (steps.length <= 0) {
// 			steps.push(walk[i]);
// 			continue;
// 		}
// 		switch (walk[i]) {
// 			case "n":
// 				steps.at(-1) === "s" ? steps.pop() : steps.push(walk[i]);
// 				break;
// 			case "s":
// 				steps.at(-1) === "n" ? steps.pop() : steps.push(walk[i]);
// 				break;
// 			case "e":
// 				steps.at(-1) === "w" ? steps.pop() : steps.push(walk[i]);
// 				break;
// 			case "w":
// 				steps.at(-1) === "e" ? steps.pop() : steps.push(walk[i]);
// 				break;
// 			default:
// 				return false;
// 		}
// 	}

// 	return steps.length <= 0;
// }

// console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));

// function isValidWalk(walk) {
// 	if (walk.length > 10 || walk.length < 10) return false;

// 	const coordinates = {
// 		n: 0,
// 		s: 0,
// 		e: 0, // left
// 		w: 0, // right
// 	};

// 	for (let step of walk) {
// 		if (!"nsew".includes(step)) {
// 			return false;
// 		}
// 		switch (step) {
// 			case "n":
// 				!coordinates["s"] ? coordinates["n"]++ : coordinates["s"]--;
// 				break;
// 			case "s":
// 				!coordinates["n"] ? coordinates["s"]++ : coordinates["n"]--;
// 				break;
// 			case "e":
// 				!coordinates["w"] ? coordinates["e"]++ : coordinates["w"]--;
// 				break;
// 			case "w":
// 				!coordinates["e"] ? coordinates["w"]++ : coordinates["e"]--;
// 				break;
// 		}
// 	}

// 	for (let position in coordinates) {
// 		if (coordinates[position] > 0) return false;

// 		return true;
// 	}
// }

// console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
// console.log(isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]));
// console.log(isValidWalk(["w"]));
// console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));

const arr = [1, 19];
console.log(arr.at(-1));
