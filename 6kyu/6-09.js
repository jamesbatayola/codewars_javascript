// Description:
// Task

// Connect Four its a game where 2 players, each turn, drop a colored disc in one of the columns of a grid. When a player drops a disc, this will occupy the next space available in the column. The winner is the first player that forms a line (vertical, diagonal or horizontal) of 4 discs of its own color.

// However, in this kata there are the following twists:

//     There's no gravity, so a disc will just be placed in an XY position
//     The space of the game is virtually infinite, so a disc can be placed in any XY position
//     There can be more than 2 players

// Given a game situation, where some discs has been already been placed, you have to determine a winner, if there's one.
// Input

// The input consists in an array of moves made during the game

// [
//   {p: 'R', x: 0, y: 0},
//   {p: 'Y', x: 100, y: 100},
//   {p: 'R', x: 1, y: 0},
//   {p: 'Y', x: 99, y: 100},
//   {p: 'R', x: 2, y: 0},
//   {p: 'Y', x: 98, y: 100},
//   {p: 'R', x: 3, y: 0},
//   {p: 'Y', x: 96, y: 100}
// ];

// You can see in this example that the player R won making the line

//   {x: 0, y: 0}{x: 1, y: 0}{x: 2, y: 0}{x: 3, y: 0}

// Be aware that the moves ARE NOT ordered by time, this is an example that would fit well for describe a normal match but the moves you will receive will be in a random order
// Output

// You must return the player that won as string, in the example above, you would return 'R'

// If there's no winner, you must return null
// Constraints

//     As the standard rules, you must check from rows, columns and diagonals
//     If there's a winner, there will be only one
//     You will not receive empty array, nor invalid inputs
//     There will not be duplicates points

const connectFour = (moves) => {
   let p1Moves = [];
   let p2Moves = [];

   for (let move of moves) {
      let counter = 0;
      if (endGame) {
         break;
      }

      // p1 moves
      for(let i = 0; i < p1Moves.length; i++) {
        if(p1Moves[i])
      }


    //   p1Moves.push([move.x, move.y]);
    //   for (let i = 0; i < p1Moves.length; i++) {
    //      if (p1Moves.length < 4) break;
    //      if (
    //         p1Moves[0][i] + 1 === p1Moves[0][i + 1] ||
    //         p1Moves[0][i] - 1 === p1Moves[0][i - 1]
    //      ) {
    //      }
    //   }

      if (endGame) {
         break;
      }

      // p2 moves
      p2Moves.push([move.x, move.y]);
      for (let i = 0; i < p2Moves.length; i++) {
         if (p2Moves.length < 4) break;
         if (
            p2Moves[0][i] + 1 === p2Moves[0][i + 1] ||
            p2Moves[0][i] - 1 === p2Moves[0][i - 1]
         ) {
         }
      }
   }
};

// const pusher = (slot, pos) => {

//     if(slot.)

//     return moves;
// }

console.log();