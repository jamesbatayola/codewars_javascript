// Description:
// If you have completed the Tribonacci sequence kata, you would know by now that mister Fibonacci has at least a bigger brother. If not, give it a quick look to get how things work.

// Well, time to expand the family a little more: think of a Quadribonacci starting with a signature of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would probably sound a bit more italian, but it would also sound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.

// Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.

// xbonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}
// xbonacci {0,0,0,0,1} 10 = {0,0,0,0,1,1,2,4,8,16}
// xbonacci {1,0,0,0,0,0,1} 10 = {1,0,0,0,0,0,1,2,3,6}
// xbonacci {1,1} produces the Fibonacci sequence

function Xbonacci(signature, n) {
	if (signature.length > n) {
		return signature.slice(0, n);
	}

	let c = 0;

	while (signature.length < n) {
		const sub = signature.slice(c++);
		const sum = sub.reduce((x, y) => x + y);
		signature.push(sum);
	}

	return signature;
}

// RECURSIVE APPROACH | CLAUDE'S SOLUTION //

function Xbonacci(signature, n) {
	// Base cases
	if (n <= 0) return [];
	if (signature.length >= n) return signature.slice(0, n);

	// Create a recursive helper function that maintains the original X value
	function generateSequence(seq, remaining, x) {
		if (remaining === 0) return seq;

		// Calculate next number (sum of last X elements)
		const lastXElements = seq.slice(-x);
		const nextNum = lastXElements.reduce((sum, num) => sum + num, 0);

		// Add to sequence and continue recursion
		return generateSequence([...seq, nextNum], remaining - 1, x);
	}

	// Start the recursive process
	return generateSequence(signature, n - signature.length, signature.length);
}
