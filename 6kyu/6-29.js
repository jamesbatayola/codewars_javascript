// Collatz Conjecture Sequence Length
// The Collatz Conjecture is a famous mathematical sequence that works like this:

// Start with any positive integer n
// If n is even, the next number is n/2
// If n is odd, the next number is 3n+1
// Continue this process until you reach 1

// The conjecture states that no matter what number you start with, you'll always eventually reach 1.
// Your challenge is to write a recursive function that calculates how many steps it takes to reach 1 from any starting number.
// For example:

// Starting with n=6: [6→3→10→5→16→8→4→2→1] takes 8 steps
// Starting with n=12: [12→6→3→10→5→16→8→4→2→1] takes 9 steps

function collatzSteps(n, steps = 0) {
	// base case
	if (n === 1) return steps;

	if (n % 2 === 0) n = n / 2;
	else n = n * 3 + 1;

	return collatzSteps(n, ++steps);
}

console.log(collatzSteps(6, 0));
console.log(collatzSteps(12, 0));
