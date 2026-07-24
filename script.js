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
      description: "Penne mit scharfer Tomatensauce und Chili ferfeinert",
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

let ContentRef = document.getElementById("content");
const basketRef = document.getElementById("basket");
const basketMiniRef = document.getElementById("basket_count");
let overlayRef = document.getElementById("overlay");
const img = document.getElementById("image");
let myBasket = [];

function init() {
  createContent();
  createBasket();
  createOverlay();
  //unvalidamount();
}
function createContent() {
  for (let category in myFood) {
    // Eigener Container pro Kategorie
    let categoryHTML = `<div class="category" id="${category}">
                        <h2 id= "category">${category}</h2>`;

    // Nur die Gerichte dieser Kategorie
    for (let i = 0; i < myFood[category].length; i++) {
      categoryHTML += showContent(myFood[category][i], category, i);
    }
    categoryHTML += `</div>`;
    ContentRef.innerHTML += categoryHTML;
  }
}

function createBasket() {
  basketRef.innerHTML = "";
  let subtotal = 0;
  for (let category in myFood) {
    for (let i = 0; i < myFood[category].length; i++) {
      let item = myFood[category][i];
      if (item.amount > 0) {
        basketRef.innerHTML += showBasket(item, category, i);
        subtotal += item.price * item.amount;
      }
    }
  }
  if (subtotal === 0) {
    basketRef.innerHTML += emptyBasket();
  } else {
    const delivery = 2.5;
    const total = subtotal + delivery;
    basketRef.innerHTML += showTotal(subtotal, delivery, total);
  }
}

function addToBasket(category, index) {
  let item = myFood[category][index];
  if (!myBasket.includes(item)) {
    myBasket.push(item);
  }
  item.amount++;
  createBasket();
  updateBasketCount();
}

function toggleBasket() {
  basketRef.classList.toggle("none");
}

function addamount(category, index) {
  myFood[category][index].amount++;
  createBasket();
  updateBasketCount();
}

function lessamount(category, index) {
  if (myFood[category][index].amount > 0) {
    myFood[category][index].amount--;
  }
  createBasket();
  updateBasketCount();
}

function Openoverlay() {
  overlayRef.classList.remove("none");
  basketRef.classList.add("none");
  for (let category in myFood) {
    for (let item of myFood[category]) {
      item.amount = 0;
    }
  }
  myBasket = [];
  createBasket();
  updateBasketCount();
  setTimeout(() => {
    overlayRef.classList.add("none");
    setTimeout(() => overlayRef.close(), 500);
  }, 4000);
}

function createOverlay() {
  overlayRef.innerHTML += showOverlay();
}
function getBasketCount() {
  let count = 0;

  for (let category in myFood) {
    for (let item of myFood[category]) {
      count += item.amount;
    }
  }

  return count;
}

function updateBasketCount() {
  basketMiniRef.textContent = getBasketCount();
}

//function unvalidamount(indexFood) {
//if (myFood[indexFood].amount < 1) {
//  console.log("Menge kann nicht weniger als 0 sein!");
// myFood[indexFood].amount >= 0;
//}
//}
