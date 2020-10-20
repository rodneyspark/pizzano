function pizza(name) {
  this.pizzaName = name;
}
pizza.prototype.nameSize = function() {
  if (this.pizzaName === "kindergafring.") {
      return "kindergafring.";
  }else if(this.pizzaName === "Burger.") {
      return "Burger.";
  }else if(this.pizzaName === "Deluxe.") {
      return "Deluxe.";
  }else if(this.pizzaName === "Macon BBQ.") {
      return "Macon BBQ.";
  }else if(this.pizzaName === "Beef Pepperoni.") {
      return "Beef Pepperoni.";
  }else if(this.pizzaName === "litle Feast.") {
      return "litle Feast.";
  }else if(this.pizzaName === "qwent Feta.") {
      return "Roast Veg & Feta.";
  }else if(this.pizzaName === "Spongy Boerewors.") {
      return "Spongy Boerewors.";
  }else {
      alert("Please select a pizza type to continue");
  };
}

function size(name) {
  this.sizeName = name;
}

size.prototype.priceSize = function() {
  if (this.sizeName === "large") {
      // alert("Large");
      return 4500;
  } else if(this.sizeName === "medium") {
      // alert("Not large");
      return 3150;
  } else if(this.sizeName === "small") {
      return 1900;
  } else {
      alert("Please select a pizza size");
  }
}

function crust(name) {
  this.crustName = name;
}

crust.prototype.crustPrice = function() {
  if (this.crustName === "cheese") {
      // alert("cheese");
      return 100;
  } else if (this.crustName === "thin") {
      return 70;
  } else if (this.crustName === "neapolitan") {
      return 120;
  } else {
      alert("Please select a prefferable crust to continue");
  }
}

function topping(name) {
  this.toppingName = name;
}

topping.prototype.toppingPrice = function() {
  if (this.toppingName === "Pepperoni") {
      return 10;
  } else if (this.toppingName === "mushrooms") {
      return 40;
  } else if (this.toppingName === "Onions") {
      return 15;
  } else if (this.toppingName === "Sausage") {
      return 20;
  } else if (this.toppingName === "Bacon") {
      return 30;
  } else if (this.toppingName === "Extra-cheese") {
      return 10;
  } else if (this.toppingName === "Black-olives") {
      return 15;
  } else if (this.toppingName === "Green-peppers") {
      return 5;
  } else {
      alert("Please choose topping(s) of your choice");
  }
}



function quantity(name) {
  this.quantityName = name;
}

quantity.prototype.quantityPrice = function() {

}

$(document).ready(function() {
  $(".location-form").submit(function(event) {
    event.preventDefault();
    var number= $ ("#phone").val()
    var location = $ ("#location").val()
    // if (number=== "number") {
        alert("for your door delivery  it will be delivered to" + location +"at a fee of 200")
        
    // } else {
        
    // }
    

    //   alert("For to door deliveries. Please confirm by pressing ok to continue");
    //   prompt("Plehonease Enter your mobile number");
    //   prompt("Enter your current location");

  });
});


$(document).ready(function() {
  $("#checkout").click(function() {
      event.preventDefault();

  var pizzaInput = $("#type").val();

      pizzaSelect = new pizza(pizzaInput);
      pizzaSelect.nameSize();
      // alert(pizzaSelect.nameSize());

  var sizeInput = $("#size").val();

  var pizzaSize = new size(sizeInput);
      pizzaSize.priceSize();
      // alert(pizzaSize.priceSize());

  var crustInput = $("#crust").val();
  
  var crustSize = new crust(crustInput);
      crustSize.crustPrice();
      // alert(crustSize.crustPrice());


  var toppingInput = $("#toppings").val();

  var toppingSize = new topping(toppingInput);
      toppingSize.toppingPrice();
      // alert(toppingSize.toppingPrice());


  var quantityInput = $("quantity").val();

  var  quantitySize = new quantity (quantityInput);
       quantitySize.quantityPrice();
      //  alert(quantitySize.quantityPrice());

 // calcTotal to calculate the total pizza summation

  var pizzaPrice = (parseInt(parseInt(pizzaSize.priceSize()) + parseInt(crustSize.crustPrice()) + parseInt(toppingSize.toppingPrice())));
  $("#submition").append(pizzaPrice);

  // S-size, C-crust, T-toppings N-name

  var pizzaS = (pizzaSize.priceSize());
  $("#psize").append(pizzaS);

  var pizzaC = (crustSize.crustPrice());
  $("#cprice").append(pizzaC);

  var pizzaT = (toppingSize.toppingPrice());
  $("#tprice").append(pizzaT);

  var pizzaN = (pizzaSelect.nameSize());
  $("#ptype").append(pizzaN);
  event.preventDefault();
  
  });
})

