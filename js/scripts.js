function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}
let testPizza = new Pizza(["pepperoni", "bellpeppers","garlic drizzle"], "Earthling");

Pizza.prototype.totalPrice = function() {
  let toppingsPrice = 0;
  let sizePrice =0;
  
  for(let i = 0; i <this.toppings.length; i++ ) {
    toppingsPrice += 2;
  };
  
  if(this.size === 'Multidimensional') {
    sizePrice = 70;
  } else if(this.size === 'Universal') {
    sizePrice = 55.00;
  } else if(this.size === 'Galactic') {
    sizePrice = 40.00;
  } else if(this.size === 'Earthling') {
    sizePrice = 25.00;
  }
  return (toppingsPrice + sizePrice);
}

testPizza.totalPrice();

