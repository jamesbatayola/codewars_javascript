// In an attempt to boost sales, the manager of the pizzeria you work at has devised a pizza rewards system: if you already made at least 5 orders of at least 20 dollars, you get a free 12 inch pizza with 3 toppings of your choice.

// However, the rewards system may change in the future. Your manager wants you to implement a function that, given a dictionary of customers, a minimum number of orders and a minimum order value, returns a set of the customers who are eligible for a reward.

// Customers in the dictionary are represented as:

// { 'customerName' : [list_of_order_values_as_integers] }

function pizzaRewards(customers, minOrders, minPrice) {
	const has_free_pizza = [];

	for (let [name, orders] of Object.entries(customers)) {
		let total_orders = 0;
		for (let order of orders) {
			if (total_orders >= minOrders) break;
			if (order >= minPrice) total_orders++;
		}

		if (total_orders >= minOrders) has_free_pizza.push(name);
	}

	return has_free_pizza;
}

console.log(
	pizzaRewards(
		{
			"John Doe": [22, 30, 11, 17, 15, 52, 27, 12],
			"Mary Jane": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
		},
		5,
		20,
	),
);
