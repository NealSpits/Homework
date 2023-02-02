const Toppings= [
    "pepperoni", 
    "sausage", 
    "cheese",  
    "bacon",  
    "supreme" 
];

//greet customer funtion

// function pizzaStuff(pizzaToppings){

// };
// pizzaStuff(Toppings);


function greetCustomer(pizzaToppings) {
    console.log(`Welcome to Ottos Pizza, our toppings are:`);
    for (let i = 0; i < pizzaToppings.length; i++) {
        console.log(pizzaToppings[i]);
    }
};
greetCustomer(Toppings);



function getPizzaOrder(size, crust, ...moreToppings) {
    console.log(`One ${size} ${crust} crust pizza with ${moreToppings} coming up! `);
    return [size, crust, ...moreToppings];
}
getPizzaOrder("large", "thin", Toppings);



function preparePizza(aPizza){
    console.log(`Cooking pizza`)
return {
    size: aPizza[0],
    crust: aPizza[1],
    toppings: aPizza[2]
}
}
console.log(preparePizza(getPizzaOrder("large", "thin", Toppings)))

function servePizza(pizzaObj){
console.log(`Here is you ${pizzaObj.size} ${pizzaObj.crust} crust pizza with ${pizzaObj.toppings}`);
}; 

servePizza(preparePizza(getPizzaOrder("large", "thin", Toppings)));

// getPizzaOrder();
// preparePizza();
// servePizza();


