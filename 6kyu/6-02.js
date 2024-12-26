// We are storing numbers in the nodes of a binary tree. The tree starts at the root node. The root has two child nodes, its leftchild and rightchild. Each of those nodes also has two child nodes, and so on, until we reach the leaf nodes, nodes that have no children. Each node stores one nonnegative integer. The value at every non-leaf node is supposed to be the sum of its two children. But the value at one node is incorrect. Find this node.

// Example: Consider the tree below. Note that 13 is the sum of 6 and 7, but the value 15 is incorrect, because 15 != 5 + 9 and 27 != 13 + 15. Clearly the 15 should be changed to 14.

//            27
//          /    \
//         13    15
//        /  \   / \
//       6   7  5   9

// The tree will always be full (all non-leaf nodes have exactly 2 children) and perfect (all leaves are on the bottom level). If we consider the root as level 1, its children as level 2, their children as level 3, and so on, the tree will contain at least 3 levels (and no more than 10). If the incorrect value occurs on the leaf level, then the right child will always be the incorrect one.

// The tree is provided as a list or array (as appropriate to the language), with the nodes in breath-first order. So:
// The root is element 0, its leftchild is element 1 and its rightchild is element 2;
// Element 1's leftchild is element 3 and its rightchild is element 4;
// Element 2's leftchild is element 5 and its rightchild is element 6, and so on.

// Your function should return the index of the incorrect node and the value that it should be changed to. In a language that doesn't allow multiple values to be returned, the Solution Setup shows what type to return (e.g. in Java an array of two integers, in C# a tuple of two integers).

// Examples:

// If the tree is [27, 13, 15, 6, 7, 5, 9], the function should return 2,14.

// If the tree is [21, 9, 10, 4, 5, 4, 6, 2, 2, 1, 4, 1, 3, 2, 4], the function should return 0,19.

// If the tree is [29, 13, 16, 5, 8, 9, 1], the function should return 6,7.
// This is because of the condition "if the incorrect value occurs on the leaf level, then the right child will always be the incorrect one." Since 9 + 1 != 16, the 1 must be changed to 7, rather than changing the 9 to 15.

// SOURCE: Programming Competition at the Midwest Instructional Computing Symposium, 2018.

// ----- UNFINISHED ----- // 

function findIncorrectValue(tree) {
    let treeHeight = 0;
 
    for(let i = 1; i < tree.length; i *= 2) {
        treeHeight++;
    }

    let initPos = 0, initSize = 1;
    const multi = [];

    // 2d array
    for(let i = 0; i < treeHeight; i++) {
        let temp = [];
        for(let j = 0; j < initSize; j++) {
            temp.push(tree[initPos]);
            initPos++;
        }
        multi.push(temp);
        initSize += initSize;
    }

    for(let i = 0; i < multi.length;) {
        if(i+1 >= multi.length) {
            return;
        }

        let parentIndex = multi[i].length - 1;
        for(let j = multi[i+1].length - 1; j > 0;) {
            const leftChild = multi[i+1][j-1];
            const rightChild = multi[i+1][j];
             
            if(multi[i][parentIndex] !== rightChild + leftChild) {
                console.log(`at index ${parentIndex + multi.length - 1} | ${multi[i]}`);
                return;
            }

            if(multi[i+1].length <= 2) {
                break;
            }

            j-=2;
        } 
    }


    // --- BOTTOM FIRST APPROACH --- //
    // for(let i = multi.length - 1; i > 0; i--) {
    //     let parentPos = multi[i-1].length - 1;
    //     const currParent = multi[i-1][parentPos];
    //     for(let x = multi[i].length -1 ; x > 0;) {
    //         const leftChild = multi[i][x-1];
    //         const rightChild = multi[i][x];
    //         if( currParent !== leftChild + rightChild) {
    //             console.log(currParent);
    //             const asd = parentPos + multi.length
    //         }
    //         x-=2;
    //         parentPos--;
    //     }
    // }

}

// PSEUDO-CODE

// start the loop from the end
// determine the tree's depth
// sum the pair of node and compare to their parents.

// findIncorrectValue([27, 13, 15, 6, 7, 5, 9]);
// findIncorrectValue([29, 13, 16, 5, 8, 9, 1]);
findIncorrectValue([21, 9, 10, 4, 5, 4, 6, 2, 2, 1, 4, 1, 3, 2, 4]);