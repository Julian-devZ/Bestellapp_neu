function showContent2() {
  return `  <div><img src="assets/images/food_is_on_the_way.png" alt="Bestellungs unterwegs(Bild)"></div>
  <p> <strong> IHRE BESTELLUNSG IST UNTERWEGS!</strong></p>
    `;
}
function showContent(indexFood, imageIndex) {
  return `
   <section id="Pasta" class="border">
   
    <p>${myFood[indexFood].name}</p>
     <p>${myFood[indexFood].price}€ <button onclick="addtoBasket(${indexFood})">+</button></p>
      <p>${myFood[indexFood].description}</p>

      <img id="image"src ="assets/images/fresh-pasta.jpg"/></img>
</section>
    `;
}

function showBasket(i) {
  return `
  
  <div class="items_basket">
  <div class="basket_font">
<h2>${myBasket[i].name}</h2>
<div class ="basket_price">
<h2>Menge: ${myBasket[i].id}</h2> 
<button>+</button>
 <button>-</button> <br>
  <button>X</button>
 </div>
</div>

`;
}

//<h2> ${(myBasket[i].price * myBasket[i].id).toFixed(i)} €</h2>
