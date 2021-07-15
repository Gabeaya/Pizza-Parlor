Describe: Pizza()

Test: "It should have two parameters and take two values, one being an array for toppings and the other a string which is the size."
Code:
let testPizza = new Pizza(['pepperoni', 'bellpeppers'], 'large');
testPizza
Expected Output:
>Pizza {toppings: Array(2), size:"Large"}


Describe: sizePrice()

Test: "It should call on an instance of the pizza objects, and return a price(string) based on the inputted size."
Code: 
testPizza.sizePrice();
Expected Output: "25.00"


Describe: toppingsPrice()

Test:  "The function should add $2.00 per topping."
Code:
testPizza.toppingsPrice();
Expected Output: $6.00

Describe: totalPrice()

Test: "This function should perform both the toppingsPrice and sizePrice functions while also adding both of there outputs to get the total pizza price."
Code:
testPizza.totalPrice();
Expected Output: "31"