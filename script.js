let myFood = {
  Pasta: [
    {
      name: "Spaghetti Bolognese",
      description: "Spaghetti mit einer herzhaften Rindfleisch-Tomatensauce",
      price: 8.5,
      amount: 0,
      image: "assets/images/fresh-pasta.jpg",
    },

    {
      name: "Penne Arrabbiata",
      description: "Penne mit scharfer Tomatensauce und Chili",
      price: 7.5,
      amount: 0,
      image: "assets/images/fresh-pasta.jpg",
    },
  ],

  Pizza: [
    {
      name: " Pizza Margherita",
      description: "Pizza mit Tomatensauce, Mozzarella und frischem Basilikum",
      price: 9.0,
      amount: 0,
      image: "assets/images/pizza.jpg",
    },

    {
      name: " Pizza Salami",
      description: "Pizza mit Tomatensauce, Mozzarella und Salami",
      price: 10.5,
      amount: 0,
      image: "assets/images/pizza.jpg",
    },
  ],
  Salat: [
    {
      name: "Caesar Salat",
      description: "Römischer Salat mit Caesar-Dressing, Croutons und Parmesan",
      price: 6.5,
      amount: 0,
      image: "assets/images/salad.jpg",
    },
    {
      name: "Gemischter Salat",
      description:
        "Römischer Salat mit verschiedenen Sorten, Croutons und Parmesan",
      price: 6.5,
      amount: 0,
      image: "assets/images/salad.jpg",
    },
    {
      name: "Pollo Salat",
      description:
        "Römischer Salat mit Hähnchenstreifen, Croutons und Parmesan",
      price: 6.5,
      amount: 0,
      image: "assets/images/salad.jpg",
    },
    {
      name: "Grüner Salat",
      description: "Frischer gemischter Salat mit verschiedenen Gemüse",
      price: 5.5,
      amount: 0,
      image: "assets/images/salad.jpg",
    },
  ],
};
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
let overlayRef = document.getElementById("overlay");

const img = document.getElementById("image");
let myBasket = [];
let deleleDishes = [];

function init() {
  createBasket();
  createOverlay();
  //unvalidamount();
}

for (let category in myFood) {
  // Eigener Container pro Kategorie
  let categoryHTML = `<div class="category id="${category}">
                        <h2 class= "border">${category}</h2>`;

  // Nur die Gerichte dieser Kategorie
  for (let item of myFood[category]) {
    categoryHTML += `
      <div class="border">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p>${item.price} €</p><button onclick="addtoBasket()">+</button></p>
         <img src="${item.image}" alt="${item.name}">
      </div>
    `;
  }

  categoryHTML += `</div>`;

  // Kategorie separat ins HTML einfügen
  ContentRef.innerHTML += categoryHTML;
}
//function createContent() {
//for (let category in myFood) {
//console.log("Kategorie:", category);

//// for (let indexFood = 0; indexFood < myFood[category].length; indexFood++) {
//let item = myFood[category][indexFood];
//ContentRef.innerHTML += showContent(item);
//}
//}
//}
function createImages() {
  for (let indexImages = 0; indexImages < myImages.length; indexImages++) {
    ContentRef.innerHTML += showImages(indexImages);
  }
}

function createBasket(item) {
  basketRef.innerHTML = "";
  for (let indexBasket = 0; indexBasket < myBasket.length; indexBasket++) {
    basketRef.innerHTML += showBasket(indexBasket, item);
  }
}
function addtoBasket(indexFood) {
  const FoodBasket = myFood[indexFood];
  myBasket.push(FoodBasket);
  console.log(myBasket);
  createBasket();
}
function addtoDelete(indexFood) {
  const deleteBasket = myFood[indexFood];
  deleleDishes.push(deleteBasket);
  console.log(myBasket);
  createBasket();
}
function toggleBasket() {
  basketRef.classList.toggle("none");
}
function addamount(indexFood) {
  myBasket[indexFood].amount++;
  basketRef.innerHTML = "";
  for (let indexBasket = 0; indexBasket < myBasket.length; indexBasket++) {
    basketRef.innerHTML += updateBasket(indexBasket, indexFood);
  }
}
function lessamount(indexFood) {
  myBasket[indexFood].amount--;
  basketRef.innerHTML = "";
  for (let indexBasket = 0; indexBasket < myBasket.length; indexBasket++) {
    basketRef.innerHTML += updateBasket2(indexBasket, indexFood);
  }
}
function Openoverlay() {
  overlayRef.classList.remove("none");
  basketRef.classList.add("none");
  setTimeout(() => {
    overlayRef.classList.add("none");
    setTimeout(() => overlayRef.close(), 500);
  }, 4000);
}
function createOverlay() {
  overlayRef.innerHTML += showOverlay();
}
//function unvalidamount(indexFood) {
//if (myFood[indexFood].amount < 1) {
//  console.log("Menge kann nicht weniger als 0 sein!");
// myFood[indexFood].amount >= 0;
//}
//}
