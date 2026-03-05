let myFood = [
  {
    name: "Spaghetti Bolognese",
    description: "Spaghetti mit einer herzhaften Rindfleisch-Tomatensauce",
    price: 8.5,
    id: 1,
  },

  {
    name: "Penne Arrabbiata",
    description: "Penne mit scharfer Tomatensauce und Chili",
    price: 7.5,
    id: 1,
  },

  {
    name: " Pizza Margherita",
    description: "Pizza mit Tomatensauce, Mozzarella und frischem Basilikum",
    price: 9.0,
    id: 1,
  },

  {
    name: " Pizza Salami",
    description: "Pizza mit Tomatensauce, Mozzarella und Salami",
    price: 10.5,
    id: 1,
  },

  {
    name: "Caesar Salat",
    description: "Römischer Salat mit Caesar-Dressing, Croutons und Parmesan",
    price: 6.5,
    id: 1,
  },
  {
    name: "Gemischter Salat",
    description:
      "Römischer Salat mit verschiedenen Sorten, Croutons und Parmesan",
    price: 6.5,
    id: 1,
  },
  {
    name: "Pollo Salat",
    description: "Römischer Salat mit Hähnchenstreifen, Croutons und Parmesan",
    price: 6.5,
    id: 1,
  },
  {
    name: "Grüner Salat",
    description: "Frischer gemischter Salat mit verschiedenen Gemüse",
    price: 5.5,
    id: 1,
  },
];
let ContentRef = document.getElementById("content");
let menuRef = document.getElementById("menu");
let basketRef = document.getElementById("basket");
let myBasket = [];
function createContent() {
  ContentRef.innerHTML += showContent();
}
function renderMenu() {
  menuRef.innerHTML = "";
  for (let indexmenu = 0; indexmenu < myFood.menu.length; indexmenu++) {
    menuRef.innerHTML += showMenu(indexmenu);
    //myFood.Pizza[indexPizza] =[];
  }
}

function createContent() {
  ContentRef.innerHTML += showContent();
}
function showContent() {
  return `  <div>
   <section class="border">
   
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
 <section class="border">
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
 <section class="border">
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
