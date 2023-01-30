const pizzaToppings= [
        "pepperoni", 
        "sausage", 
        "cheese",  
        "bacon",  
        "supreme" 
];

//greet customer funtion
function greetCustomer(){
    console.log(`Welcome to Otto's Pizza. Our available toppings are: ${pizzaToppings}`)
   
}
//invoking the function 
//greetCustomer();


function getPizzaOrder(size = ["small", "medium", "large"], crust = ["thin", "stuffed", "pan"], ...pizzaToppings){
    console.log(`One ${size[0]} ${crust [0]} crust pizza with pepperoni coming up! `);
    console.log(`sizes= ${size}, crust =${crust} pizza toppings= ${pizzaToppings}`);

}


function preparePizza(size = ["small", "medium", "large"], crust = ["thin", "stuffed", "pan"], toppings = ["pepperoni", "sausage", "bacon", "cheese"]){
    
console.log(`Cooking a ${size[1]}, ${crust[1]} pizza with ${toppings[2]}.`)
console.log(pizzaObj = {size, crust, toppings});
}



function servePizza(pizzaObj){
console.log(`Here is your ${size[1]} ${crust[1]} crust ${toppings[2]} pizza!}`);
console.log(`${pizzaObj}`);
};


getPizzaOrder();
preparePizza();
servePizza();