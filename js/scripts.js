function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}
Pizza.prototype.totalPrice = function() {
  let toppingsPrice = 0;
  let sizePrice =0;
  let sizeCheck = "Please select a size";
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
  } else {
    alert (sizeCheck);
  }
  return toppingsPrice + sizePrice;
}

$(document).ready(function() {
  $("#pizza-order").submit(function(e) {
    e.preventDefault();
    const toppings = $('input[name="toppings"]:checked').map(function() {
      return $(this).val();
    }).get(); //we laced a function within our map.prototype.get() method
    const size = $("#size").val();

    const order = new Pizza(toppings, size);

    const price = (order.totalPrice());
    console.log(price);
    $('#total').html(price);
    $('.hidden-price').show();
  });
});