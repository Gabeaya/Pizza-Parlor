# _Pizza Project_

_A web application for demonstrating skill with JavaScript objects, constructors, and prototypes._

## Technologies Used

* _HTML_
* _CSS_
* _Vs Code_
* _Bootstrap_
* _JavaScripts_
* _JQuery 3.6.0_

## Description 
_This program allows the user to first select multiple toppings of their choice. They then have the option between four sizes. Upon selecting and submitting their form, the user will be informed of the price of their order along with a thank you statement._

## Specs
Describe: `Pizza();`

Test: "It should have two parameters and take two values, one being an array for toppings and the other a string which is the size."
Code:
let testPizza = new Pizza(['pepperoni', 'bellpeppers'], 'large');
testPizza
Expected Output:
>Pizza {toppings: Array(2), size:"Large"}


Describe: `sizePrice();`

Test: "It should call on an instance of the pizza objects, and return a price(string) based on the inputted size."
Code: 
testPizza.sizePrice();
Expected Output: "25.00"


Describe: `toppingsPrice();`

Test:  "The function should add $2.00 per each iteration of a topping element within the array."
Code:
testPizza.toppingsPrice();
Expected Output: $6.00

Describe: `totalPrice();`

Test: "This function should perform both the toppingsPrice and sizePrice functions while also adding both of there outputs to get the total pizza price."
Code:
testPizza.totalPrice();
Expected Output: "31"

## Setup/Installation Requirements 
* Clone github repo `https://github.com/Gabeaya/Pizza-Code-Review`:
* Navigate to directory `pizza-parlor`
* Open `index.html` in your browser.
* Input choices.

## Known Bugs 
* _Although the user is alerted that they need to select a size if not selected, the "$0.00" will display after._

## License
Mit &copy; 2021 _Gabriel Ayala_

## Contact Information

_Gabriel Ayala: gabeayala100@gmail.com_