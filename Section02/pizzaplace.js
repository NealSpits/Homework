let pizzaPlace = `Otto's Pizza`;
let numberOfToppings = 4;

console.log(`The name of the pizza place is:${pizzaPlace}`);
console.log(typeof {pizzaPlace});
console.log(`Number of toppings we offer: ${4}`);
console.log(typeof {numberOfToppings});

console.log(`This is ${pizzaPlace} and we offer ${numberOfToppings} pizza toppings.`);

if (numberOfToppings <= 10) {
    console.log(`Quality, not quantity.`);
} else {
    console.log("A whole lot of pizza.")
}