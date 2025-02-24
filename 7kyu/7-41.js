// Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.
// Examples

// ['jo', 'nelson', 'jurie'] -->  ['Jo', 'Nelson', 'Jurie']
// ['KARLY', 'DANIEL', 'KELSEY'] --> ['Karly', 'Daniel', 'Kelsey']

function capMe(names) {
   return names.map(
      (name) => name[0].toUpperCase() + name.slice(1).toLowerCase()
   );
}

console.log(capMe(["jo", "nelson", "jurie"]));
