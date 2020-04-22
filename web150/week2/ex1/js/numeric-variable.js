var price;
var quantity;
var total;
 
price = 5;
quantity = 12;
total = price * quantity;
 
var el = document.getElementById('cost');
el.textContent = '$' + total;