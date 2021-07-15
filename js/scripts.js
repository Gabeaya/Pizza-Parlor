function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

let testPizza = new Pizza(["pepperoni", "bellpeppers","garlic drizzle"], "Earthling");

Pizza.prototype.sizePrice = function() {
  if(this.size === 'Multidimensional') {
    return '$70.00';
  } else if(this.size === 'Universal') {
    return '$55.00';
  } else if(this.size === 'Galactic') {
    return '$40.00';
  } else if(this.size === 'Earthling') {
    return '$25.00'
  }
}

testPizza.sizePrice();


