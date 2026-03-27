function showBasket(indexFood, item) {
  return `
  
  <div class="items_basket">
  <div class="basket_font">
<h2>${myBasket.item.name}</h2>
<div class ="basket_price">
<h2>Menge:<button onclick="addamount(${indexFood})">+</button> ${item.amount}<button>-</button> <br></h2>
<h2> ${(myBasket.item.price * myBasket.item.amount).toFixed(indexFood)} €</h2>
  <button onclick="toggleBasket(),addtoDelete()">X</button>
 </div>
</div>
<a onclick="Openoverlay()">Ihre Bestellung hier abschließen</a>
`;
}
function updateBasket(indexFood) {
  return `
  
  <div class="items_basket">
  <div class="basket_font">
<h2>${myBasket[indexFood].name}</h2>
<div class ="basket_price">
<h2>Menge:<button onclick=" addamount(${indexFood})">+</button> ${myFood[indexFood].amount}<button onclick="lessamount(${indexFood})">-</button> <br></h2>
<h2> ${(myBasket[indexFood].price * myBasket[indexFood].amount).toFixed(indexFood)} €</h2>

 
  <button onclick="toggleBasket()">X</button>
 </div>
</div>

`;
}
function updateBasket2(indexFood) {
  return `
  
  <div class="items_basket">
  <div class="basket_font">
<h2>${myBasket[indexFood].name}</h2>
<div class ="basket_price">
<h2>Menge:<button onclick=" addamount(${indexFood})">+</button> ${myFood[indexFood].amount}<button onclick="lessamount(${indexFood}),unvalidamount(${indexFood})">-</button> <br></h2>
<h2> ${(myBasket[indexFood].price * myBasket[indexFood].amount).toFixed(indexFood)} €</h2>

 
  <button onclick="toggleBasket()">X</button>
 </div>
</div>

`;
}
function showOverlay() {
  return `

    <div id ="overlay"><img src="assets/images/food_is_on_the_way.png" alt="food on the food_is_on_the_way">Ihre Bestellung ist unterwegs!</div>
   
    `;
}

//<h2> ${(myBasket[i].price * myBasket[i].id).toFixed(i)} €</h2>
