function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}
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

$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    const toppings = $('input[name="toppings"]:checked').map(function() {
      return $(this).val();
    }).get(); //we laced a function within our map.prototype.get() method
    console.log(toppings);
  });
});