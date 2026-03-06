let headerRef = document.getElementById("header");
let footerRef = document.getElementById("footer");

function createHeader() {
  headerRef.innerHTML += showHeader();
}
function showHeader() {
  return `  
   <header id="header">
    <img src="assets/images/Bestell App- Logo.svg" alt="Logo Bestellapp">
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
}
function showContent() {
  return `  <div>
   <section id="Pasta" class="border">
   
    <p>${myFood[0].name}</p>
     <p>${myFood[0].price}€ <button>+</button></p>
      <p>${myFood[0].description}</p>
      
       <img src="assets/images/fresh-pasta.jpg" alt="Pasta">
    
</section>

<section class="border">

      <p>${myFood[1].name}</p>
     <p>${myFood[1].price}€ <button>+</button></p>
      <p>${myFood[1].description}</p>
      <img src="assets/images/fresh-pasta.jpg" alt="Pasta">
    
 </section>
 <section id="Pizza" class="border">
      <p>${myFood[2].name}</p>
     <p>${myFood[2].price}€ <button>+</button></p>
      <p>${myFood[2].description}</p>
      <img src="assets/images/pizza.jpg" alt="Pizza">
</section>
<section class="border">
      <p>${myFood[3].name}</p>
     <p>${myFood[3].price}€<button>+</button></p>
      <p>${myFood[3].description}</p>
      <img src="assets/images/pizza.jpg" alt="Pizza">
 <section id="Salat"class="border">
      <p>${myFood[4].name}</p>
     <p>${myFood[4].price}€<button>+</button></p>
      <p>${myFood[4].description}</p>
      <img src="assets/images/salad.jpg" alt="Grünzeug">
</section>
<section class="border">
      <p>${myFood[5].name}</p>
     <p>${myFood[5].price}€<button>+</button></p>
      <p>${myFood[5].description}</p>
      <img src="assets/images/salad.jpg" alt="Grünzeug">
<section class="border">
      <p>${myFood[7].name}</p>
     <p>${myFood[7].price}€<button>+</button></p>
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
