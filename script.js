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
let myImages = [
  "assets/images/fresh-pasta.jpg",
  "assets/images/fresh-pasta.jpg",
  "assets/images/pizza.jpg",
  "assets/images/pizza.jpg",
  "assets/images/salad.jpg",
  "assets/images/salad.jpg",
  "assets/images/salad.jpg",
  "assets/images/salad.jpg",
];

let headerRef = document.getElementById("header");
let footerRef = document.getElementById("footer");
let ContentRef = document.getElementById("content");
let ContentRef2 = document.getElementById("content2");
const basketRef = document.getElementById("basket");

const img = document.getElementById("image");
let myBasket = [];

function createContent() {
  console.log("start");
  for (let indexFood = 0; indexFood < myFood.length; indexFood++) {
    ContentRef.innerHTML += showContent(indexFood);
  }
}

function createContent2() {
  ContentRef2.innerHTML += showContent2();
}
function createBasket(indexFood) {
  basketRef.innerHTML = " Warenkorb";
  for (let indexBasket = 0; indexBasket < myBasket.length; indexBasket++) {
    basketRef.innerHTML += showBasket(indexBasket, indexFood);
  }
}

function addtoBasket(indexFood) {
  const FoodBasket = myFood[indexFood];
  myBasket.push(FoodBasket);
  console.log(myBasket);
  createBasket();
}

//<h1> ${(myBasket[i].Preis * myBasket[i].id).toFixed(i)} €</h1>
function toggleBasket() {
  basketRef.classList.toggle("none");
}
