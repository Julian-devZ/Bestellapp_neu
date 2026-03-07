let headerRef = document.getElementById("header");
let footerRef = document.getElementById("footer");

function createHeader() {
  headerRef.innerHTML += showHeader();
}
function showHeader() {
  return `  
   <header id="header"><a href="index.html"><img src="assets/images/Bestell App- Logo.svg" alt="Logo Bestellapp"></a>
   <button id="openmenu">
    <div class="openclose"></div>
    <div class="openclose"></div>
    <div class="openclose"></div>
   </button>
    </header>
    `;
}
function createFooter() {
  footerRef.innerHTML += showFooter();
}
function showFooter() {
  return `  
   <footer id="footer">
   Copyright by Julian Zervas
    </footer>
    `;
}
function createContent() {
  ContentRef.innerHTML += showContent();
  for (let indexFood = 0; indexFood < myFood.length; indexFood++) {
    menuRef.innerHTML += showMenu(indexFood);
  }
}
function createContent2() {
  ContentRef2.innerHTML += showContent2();
}
function showContent2() {
  return `  <div><img src="assets/images/food_is_on_the_way.png" alt="Bestellungs unterwegs(Bild)"></div>
  <p> <strong> IHRE BESTELLUNSG IST UNTERWEGS!</strong></p>
    `;
}
function showContent(indexFood) {
  return `  <div>
   <section id="Pasta" class="border">
   
    <p>${myFood[0].name}</p>
     <p>${myFood[0].price}€ <button oncklick="addtoBasket()">+</button></p>
      <p>${myFood[0].description}</p>
      
       <img src="assets/images/fresh-pasta.jpg" alt="Pasta">
    
</section>

<section class="border">

      <p>${myFood[1].name}</p>
     <p>${myFood[1].price}€ <button oncklick="addtoBasket()">+</button></p>
      <p>${myFood[1].description}</p>
      <img src="assets/images/fresh-pasta.jpg" alt="Pasta">
    
 </section>
 <section id="Pizza" class="border">
      <p>${myFood[2].name}</p>
     <p>${myFood[2].price}€ <button oncklick="addtoBasket()">+</button></p>
      <p>${myFood[2].description}</p>
      <img src="assets/images/pizza.jpg" alt="Pizza">
</section>
<section class="border">
      <p>${myFood[3].name}</p>
     <p>${myFood[3].price}€<button oncklick="addtoBasket()">+</button></p>
      <p>${myFood[3].description}</p>
      <img src="assets/images/pizza.jpg" alt="Pizza">
 <section id="Salat"class="border">
      <p>${myFood[4].name}</p>
     <p>${myFood[4].price}€<button oncklick="addtoBasket()">+</button></p>
      <p>${myFood[4].description}</p>
      <img src="assets/images/salad.jpg" alt="Grünzeug">
</section>
<section class="border">
      <p>${myFood[5].name}</p>
     <p>${myFood[5].price}€<button oncklick="addtoBasket()">+</button></p>
      <p>${myFood[5].description}</p>
      <img src="assets/images/salad.jpg" alt="Grünzeug">
<section class="border">
      <p>${myFood[7].name}</p>
     <p>${myFood[7].price}€<button oncklick="addtoBasket()">+</button></p>
      <p>${myFood[7].description}</p>
      <img src="assets/images/salad.jpg" alt="Grünzeug">
    </section>
    </div>
    <aside></aside>
    `;
}
function createBasket() {
  for (let indexBasket = 0; indexBasket < myBasket.length; indexBasket++) {
    basketRef.innerHTML += showBasket(indexBasket);
  }
}
function showBasket(indexFood) {
  return `
  <div class="items_basket">
  <div class="basket_font">
<h1>${myBasket[indexFood].name}</h1>
<h1>${myBasket[indexFood].price}</h1>
<div class ="basket_price">
<h1>Menge: ${myBasket[indexFood].id}</h1> 
<button>+</button>
<h1></h1>
 <button>-</button> <br>
  <button>X</button>
 </div>
 
</div>

`;
}
function addtoBasket(indexFood) {
  const FoodBasket = myFood[indexFood];
  myBasket.push(FoodBasket);
  console.log(myBasket);
  createBasket();
}
//<h1> ${(myBasket[i].Preis * myBasket[i].id).toFixed(i)} €</h1>
