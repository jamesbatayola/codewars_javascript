// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]
  

// As you can see, the lists are cascading; ie, they overlap, but never out of order.

function eachCons(array, n) {
    const res = [];
    const arr = [array]
	for(let i = 0; i < arr[0].length; i++) {
        if(i + n > arr[0].length) 
            break
        const temp = []; 
        for(let j = 0; j < n; j++) {
            temp.push(arr[0][i+j]);
        }
        res.push(temp);
    }

    return res;
}

const test1 = eachCons([1,2,3,4], 2);
const test2 = eachCons([1,2,3,4], 3);

test2.forEach(e => console.log(e));