function Dessert(name, flavor, cost, markup){
    this.name = name;
    this.flavor = flavor;
    this.cost = cost;
    this.markup = markup;
    this.currentPrice = function(){
        return this.cost * ( 1+this.markup );
    };
}

var brownieDessert = new Dessert('Brownie','chocolate', 1.5, 0.5);
var tiramisuDessert = new Dessert('Tiramisu','coffee', 2.9, 0.4);
var pieDessert = new Dessert('Pie','pumpkin', 3.9, 0.5);

 // Update the HTML for the page
var dessertDetail1 = 'Dessert Name: ' + brownieDessert.name + ', ' ;
    dessertDetail1 += 'Flavor: ' + brownieDessert.flavor + ', ' ;
    dessertDetail1 += 'Price: ' + brownieDessert.currentPrice();
var elDessert1 = document.getElementById('dessertlist1');
elDessert1.textContent = dessertDetail1;

var dessertDetail2 = 'Dessert Name: '+ tiramisuDessert.name + ', ';
    dessertDetail2 += 'Flavor: ' + tiramisuDessert.flavor + ', '; 
    dessertDetail2 += 'Price: ' + tiramisuDessert.currentPrice() ;
var elDessert2 = document.getElementById('dessertlist2');
elDessert2.textContent = dessertDetail2;

var dessertDetail3 =  'Dessert Name: '+ pieDessert.name + ', ' ;
    dessertDetail3 += 'Flavor: ' + pieDessert.flavor + ', ';
    dessertDetail3 += 'Price: ' + pieDessert.currentPrice();
var elDessert3 = document.getElementById('dessertlist3');
elDessert3.textContent = dessertDetail3;