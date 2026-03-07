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
let ContentRef2 = document.getElementById("content2");
let menuRef = document.getElementById("menu");
let basketRef = document.getElementById("basket");
let myBasket = [];
function createContent() {
  ContentRef.innerHTML += showContent();
}
