function showContent(item, category, index) {
  return `
    <div class="border">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p>${item.price} €</p>
      <button onclick="addToBasket('${category}', ${index})">+</button>
      <img src="${item.image}" alt="${item.name}">
    </div>
  `;
}

function showBasket(item, category, index) {
  return `
    <div class="border">
      <h2>${item.name}</h2>

      <button onclick="addamount('${category}', ${index})">+</button>
      ${item.amount}
      <button onclick="lessamount('${category}', ${index})">-</button>

      <h2>${(item.price * item.amount).toFixed(2)} €</h2>
    </div>
  `;
}

function updateBasket(index) {
  let item = myBasket[index];
  return `
  
  <div class="items_basket">
            <h2>${item.name}</h2>

            <button onclick="addamount(${index})">+</button>
            ${item.amount}
            <button onclick="lessamount(${index})">-</button>

            <h2>${(item.price * item.amount).toFixed(2)} €</h2>
        </div>
    `;
}

function showTotal(subtotal, delivery, total) {
  return `
    <div class="basket-total">
      <p>Zwischensumme: ${subtotal.toFixed(2)} €</p>
      <p>Lieferkosten: ${delivery.toFixed(2)} €</p>
      <hr>
      <h3>Gesamt: ${total.toFixed(2)} €</h3>
      <a onclick="Openoverlay()">Bestellen</a>
    </div>
  `;
}

function showOverlay() {
  return `

    <div id ="overlay"><p class="border">Sie haben eine Testbestellung abgegeben.</p></div>
   
    `;
}

//<h2> ${(myBasket[i].price * myBasket[i].id).toFixed(i)} €</h2>
