// You will be given an array which lists the current inventory of stock in your store and another array which lists the new inventory being delivered to your store today.

// Your task is to write a function that returns the updated list of your current inventory in alphabetical order.

// Example
// currentStock = [[25, 'HTC'], [1000, 'Nokia'], [50, 'Samsung'], [33, 'Sony'], [10, 'Apple']]
// newStock = [[5, 'LG'], [10, 'Sony'], [4, 'Samsung'], [5, 'Apple']]

// updateInventory(currentStock, newStock)  ==>
// [[15, 'Apple'], [25, 'HTC'], [5, 'LG'], [1000, 'Nokia'], [54, 'Samsung'], [43, 'Sony']]

function _compare(a, b) {
  const _a = a[1].toLowerCase().charCodeAt(0);
  const _b = b[1].toLowerCase().charCodeAt(0);
  return _a - _b;
}

const updateInventory = (curStock, newStock) => {
  let map = new Map();

  curStock.forEach((each) => {
    map.set(each[1], each[0]);
  });

  newStock.forEach((each) => {
    if (!map.has(`${each[1]}`)) {
      map.set(each[1], each[0]);
    } else {
      const currValue = map.get(each[1]);
      map.set(each[1], currValue + each[0]);
    }
  });

  let array = [];

  for (const [key, value] of map) {
    array.push([value, key]);
  }

  return array.sort(_compare);
};

console.log(
  updateInventory(
    [
      [25, "HTC"],
      [1000, "Nokia"],
      [50, "Samsung"],
      [33, "Sony"],
      [10, "Apple"],
    ],
    [
      [5, "LG"],
      [10, "Sony"],
      [4, "Samsung"],
      [5, "Apple"],
    ]
  )
);

// console.log();
