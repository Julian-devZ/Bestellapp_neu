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
let headerRef = document.getElementById("header");
let footerRef = document.getElementById("footer");
let ContentRef = document.getElementById("content");
let ContentRef2 = document.getElementById("content2");
const basketRef = document.getElementById("basket");

let myBasket = [];
function createHeader() {
  headerRef.innerHTML += showHeader();
}
function createFooter() {
  footerRef.innerHTML += showFooter();
}
function createContent() {
  ContentRef.innerHTML += showContent();
  for (let indexFood = 0; indexFood < myFood.length; indexFood++) {}
}

function createContent2() {
  ContentRef2.innerHTML += showContent2();
}

//<h1> ${(myBasket[i].Preis * myBasket[i].id).toFixed(i)} €</h1>
function toggleBasket() {
  basketRef.classList.toggle("none");
}
