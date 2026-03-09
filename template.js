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

function showFooter() {
  return `  
   <footer id="footer">
   Copyright by Julian Zervas
    </footer>
    `;
}

function showContent2() {
  return `  <div><img src="assets/images/food_is_on_the_way.png" alt="Bestellungs unterwegs(Bild)"></div>
  <p> <strong> IHRE BESTELLUNSG IST UNTERWEGS!</strong></p>
    `;
}
function showContent() {
  return `  <div>
   <section id="Pasta" class="border">
   
    <p>${myFood[0].name}</p>
     <p>${myFood[0].price}€ <button onclick="addtoBasket()">+</button></p>
      <p>${myFood[0].description}</p>
      
       <img src="assets/images/fresh-pasta.jpg" alt="Pasta">
    
</section>

<section class="border">

      <p>${myFood[1].name}</p>
     <p>${myFood[1].price}€ <button onclick="addtoBasket()">+</button></p>
      <p>${myFood[1].description}</p>
      <img src="assets/images/fresh-pasta.jpg" alt="Pasta">
    
 </section>

 <section id="Pizza" class="border">
      <p>${myFood[2].name}</p>
     <p>${myFood[2].price}€ <button onclick="addtoBasket()">+</button></p>
      <p>${myFood[2].description}</p>
      <img src="assets/images/pizza.jpg" alt="Pizza">
</section>

<section class="border">
      <p>${myFood[3].name}</p>
     <p>${myFood[3].price}€<button onclick="addtoBasket()">+</button></p>
      <p>${myFood[3].description}</p>
      <img src="assets/images/pizza.jpg" alt="Pizza">
      </section>

 <section id="Salat"class="border">
      <p>${myFood[4].name}</p>
     <p>${myFood[4].price}€<button onclick="addtoBasket()">+</button></p>
      <p>${myFood[4].description}</p>
      <img src="assets/images/salad.jpg" alt="Grünzeug">
</section>

<section class="border">
      <p>${myFood[5].name}</p>
     <p>${myFood[5].price}€<button onclick="addtoBasket()">+</button></p>
      <p>${myFood[5].description}</p>
      <img src="assets/images/salad.jpg" alt="Grünzeug">
      </section>

<section class="border">
      <p>${myFood[7].name}</p>
     <p>${myFood[7].price}€<button onclick="addtoBasket()">+</button></p>
      <p>${myFood[7].description}</p>
      <img src="assets/images/salad.jpg" alt="Grünzeug">
    </section>

    
    `;
}
